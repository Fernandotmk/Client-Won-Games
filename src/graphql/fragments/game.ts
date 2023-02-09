import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    cover {
      data {
        attributes {
          url
        }
      }
    }
    developers {
      data {
        attributes {
          name
        }
      }
    }
    price
  }
`

export const GameFragmentRelation = gql`
  fragment GameFragmentRelation on GameRelationResponseCollection {
    data {
      id
      attributes {
        name
        slug
        cover {
          data {
            attributes {
              url
            }
          }
        }
        release_date
        developers {
          data {
            attributes {
              name
            }
          }
        }
        price
      }
    }
  }
`
