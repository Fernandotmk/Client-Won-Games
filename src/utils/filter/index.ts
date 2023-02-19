/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemProps } from 'components/ExploreSidebar'
import { GameFiltersInput } from 'graphql/generated/globalTypes'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({ queryString }: ParseArgs) => {
  // objeto vazio
  const obj: GameFiltersInput = {}

  // pegando as chaves e valores vindos da queryString
  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      key === 'price' && (obj.price = Object({ lte: Number(queryString[key]) }))

      const queryStringVetor = Array.isArray(queryString[key])
        ? queryString[key]
        : [queryString[key]]

      key === 'categories' &&
        (<[]>queryStringVetor).map((value: string) => {
          obj.and?.length
            ? obj.and?.push({ categories: { name: { containsi: value } } })
            : (obj.and = [{ categories: { name: { containsi: value } } }])
        })

      key === 'platforms' &&
        (<[]>queryStringVetor).map((value: string) => {
          obj.and?.length
            ? obj.and?.push({ platforms: { name: { containsi: value } } })
            : (obj.and = [{ platforms: { name: { containsi: value } } }])
        })
    })
  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // objeto vazio
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name == key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    // se não for array e for checkbox ele cria um array
    // no caso transforma 'rockstar' em ['rockstar']
    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })
  return obj
}
