import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', //true
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql/'
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            games: {
              // Don't cache separate results based on
              // any of this field's arguments.
              keyArgs: false,

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
  })
}

export function initializeApollo(initialState = {}) {
  // verifica se já existe uma instancia Apollo para
  // não criar outra
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com chace limpo
  if (typeof window === 'undefined') return apolloClientGlobal
  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

// quando o initial State mudar [initialState] é a dependencia
export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
