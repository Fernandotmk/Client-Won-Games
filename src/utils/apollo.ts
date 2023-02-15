import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', //true
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql/'
    }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
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
export function useApollo(initialState = null) {
  //export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])

  return store
}
