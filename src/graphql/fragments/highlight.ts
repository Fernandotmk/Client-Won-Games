import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      data {
        attributes {
          url
        }
      }
    }
    floatimage {
      data {
        attributes {
          url
        }
      }
    }
    buttonLabel
    buttonLink
    aligment
  }
`
