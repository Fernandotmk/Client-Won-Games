import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache' // garante que vem dado novo ao gerar estático
  })

  const popular = sections?.data?.attributes?.popularGames
  const upcoming = sections?.data?.attributes?.upcomingGames
  const free = sections?.data?.attributes?.freeGames
  const news = sections?.data?.attributes?.newGames

  return {
    //revalidate: 10,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: news?.title,
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(popular?.highlight),
      mostPopularGamesTitle: popular?.title,
      mostPopularGames: gamesMapper(popular?.games),
      upcomingGamesTitle: upcoming?.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighligth: highlightMapper(upcoming?.highlight),
      freeGamesTitle: free?.title,
      freeGames: gamesMapper(freeGames),
      freeHighligth: highlightMapper(free?.highlight)
    }
  }
}
