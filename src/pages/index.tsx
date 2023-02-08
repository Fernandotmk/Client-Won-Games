import Home, { HomeTemplateProps } from 'templates/Home'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  // if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 10,
      banners: banners?.data.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,

        ...(banner.attributes?.button && {
          buttonLabel: banner.attributes.button.label,
          buttonLink: banner.attributes.button.link
        }),

        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes.ribbon.text,
          ribbonColor: banner.attributes.ribbon.color,
          ribbonSize: banner.attributes.ribbon.size
        })

        // Poderia ser utilizando || null no final
        // buttonLabel: banner.attributes?.button?.label || null,
        // buttonLink: banner.attributes?.button?.link || null,
        // ribbon: banner.attributes?.ribbon?.text || null,
        // ribbonColor: banner.attributes?.ribbon?.color || null,
        // ribbonSize: banner.attributes?.ribbon?.size || null
      })),
      newGamesTitle: sections?.data?.attributes?.newGames?.title,
      newGames: newGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        // poderia fazer um map mas como só tem um
        // pegamos o primeiro[0]
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGamesTitle: sections?.data?.attributes?.popularGames?.title,
      mostPopularGames:
        sections?.data?.attributes?.popularGames?.games?.data.map((game) => ({
          title: game.attributes?.name,
          slug: game.attributes?.slug,
          developer: game.attributes?.developers?.data[0].attributes?.name,
          img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
          price: game.attributes?.price
        })),
      upcomingGamesTitle: sections?.data?.attributes?.upcomingGames?.title,
      upcommingGames: upcomingGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      upcommingHighligth: highlightMock,
      freeGamesTitle: sections?.data?.attributes?.freeGames?.title,
      freeGames: freeGames?.data.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      freeHighligth: highlightMock
    }
  }
}
