import { initializeApollo } from 'utils/apollo'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Game, { GameTemplateProps } from 'templates/Game'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from 'graphql/generated/QueryGamesBySlug'

import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'

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

  // fallback é utilizado para que o sistema
  // encontre mais opções além das 6 limitadas acima
  // então ele vai até o Banco de Dados e procura a
  // informação, assim gera a(s) nova(s) páginas
  return { paths, fallback: true }
}

// Aqui começa a busca dos dados da página
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get game Data
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  // se nao houver dados retorna o notFound como true
  if (!data.games?.data.length) {
    return { notFound: true }
  }

  const game = data.games.data[0].attributes!

  // Get recommended
  const { data: dataRecommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })
  const recommended = dataRecommended.recommended?.data?.attributes?.section

  // get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: TODAY }
  })

  const up = upcoming.showcase?.data?.attributes?.upcomingGames

  return {
    revalidate: 60,
    props: {
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
      upcomingTitle: up?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(up?.highlight),
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games)
    }
  }
}
