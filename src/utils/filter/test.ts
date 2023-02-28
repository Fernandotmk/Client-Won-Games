import { parseQueryStringToWhere, parseQueryStringToFilter } from '.'

const filterItems = [
  { name: 'price', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price: 100,
  platforms: ['mac', 'windows', 'linux'],
  categories: ['action', 'adventure', 'horror'],
  sort: 'price:asc'
}

describe('parseQueryStringToWhere()', () => {
  it('should parse queryString to where format', () => {
    const parsedQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price: { lte: 100 },
      and: [
        {
          platforms: {
            name: {
              containsi: 'mac'
            }
          }
        },
        {
          platforms: {
            name: {
              containsi: 'windows'
            }
          }
        },
        {
          platforms: {
            name: {
              containsi: 'linux'
            }
          }
        },
        {
          categories: {
            name: {
              containsi: 'action'
            }
          }
        },
        {
          categories: {
            name: {
              containsi: 'adventure'
            }
          }
        },
        {
          categories: {
            name: {
              containsi: 'horror'
            }
          }
        }
      ]
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      price: 100,
      platforms: ['mac', 'windows', 'linux'],
      categories: ['action', 'adventure', 'horror'],
      sort: 'price:asc'
    })
  })
})
