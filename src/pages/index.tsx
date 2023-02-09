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
    variables: { date: TODAY }
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(
        sections?.data?.attributes?.popularGames?.highlight
      ),
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularGames: gamesMapper(
        sections?.data?.attributes?.popularGames?.games
      ),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighligth: highlightMapper(
        sections?.data?.attributes?.upcomingGames?.highlight
      ),
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighligth: highlightMapper(
        sections?.data?.attributes?.freeGames?.highlight
      )
    }
  }
}
