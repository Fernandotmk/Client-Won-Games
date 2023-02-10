import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  // const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      // agora nao a mais a necessidade de pegar os dados
      // atravrés do const data pois o Apollo pegara os mesmos
      // através do cache, assim o initalApolloState (declaro na pag _app)
      // será responsável por popular os dados entre o server side
      // e client side
      // Através do método extract os dados são extraidos do server side
      // e enviados para o client side
      inititalApolloState: apolloClient.cache.extract(),

      // games: data.games!.data.map((game) => ({
      //   title: game.attributes!.name,
      //   slug: game.attributes!.slug,
      //   developer: game.attributes!.developers!.data[0].attributes!.name,
      //   img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      //   price: game.attributes?.price
      // })),
      filterItems: filterItemsMock
    }
  }
}
