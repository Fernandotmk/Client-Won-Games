import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lte: "2021-01-27" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    upcomingGames: games(
      filters: { release_date: { gt: "2022-02-07" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    freeGames: games(
      filters: { price: { lte: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }
  ${BannerFragment}
  ${GameFragment}
`
