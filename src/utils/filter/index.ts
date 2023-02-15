/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // objeto vazio
  const obj: any = {}

  // pegando as chaves e valores vindos da queryString
  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      //pegando o item que for igual a key
      const item = filterItems?.find((item) => item.name === key)
      //verificando o tipo do item, se é checkbox ou radio
      const isCheckbox = item?.type === 'checkbox'

      // inserindo dentro do objeto vazio os valores recebidos
      obj[key] = !isCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] }
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
