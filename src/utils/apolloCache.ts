import { InMemoryCache } from '@apollo/client'
import { QueryGames_games } from 'graphql/generated/QueryGames'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // games: concatPagination(['filters', 'sort'])

        games: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: ['sort', 'filters'],

          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing: QueryGames_games, incoming: QueryGames_games) {
            return {
              ...incoming,

              data: [...(existing?.data ?? []), ...(incoming.data ?? [])]
            }
          }
        }
      }
    }
  }
})
