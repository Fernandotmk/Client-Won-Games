import { initializeApollo } from 'utils/apollo'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Game, { GameTemplateProps } from 'templates/Game'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/games'
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from 'graphql/generated/QueryGamesBySlug'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  // usando o Router do NextJs, para pegar valores
  // nesse caso é o slug
  const router = useRouter()

  // se a rota nao tiver sido gerada ainda
  // voce pode mostrar um loading, um esqueleto
  if (router.isFallback) return null
  return <Game {...props} />
}

//definindo a rota da url
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 6 }
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = data.games!.data.map(({ attributes }: any) => ({
    params: { slug: attributes!.slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0].attributes!

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game!.cover?.data!.attributes!.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery!.data.map((image) => ({
        src: `http://localhost:1337${image.attributes!.src}`,
        label: image.attributes!.label
      })),
      description: game.description,
      details: {
        developer: game.developers!.data[0].attributes!.name,
        releaseDate: game.release_date,
        platforms: game.platforms!.data.map(
          (platform) => platform.attributes!.name
        ),
        publisher: game.publisher!.data!.attributes!.name,
        rating: game.rating,
        genres: game.categories!.data.map(
          (category) => category.attributes!.name
        )
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
