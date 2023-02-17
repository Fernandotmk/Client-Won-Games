import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'
import * as S from './styles'
import { useQueryGames } from 'graphql/queries/games'
import Empty from 'components/Empty'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ParsedUrlQueryInput } from 'querystring'
//import Loading from 'components/Loading'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  // utilizando o useQUery do Apollo, para trazer mais
  // games sem precisar dar refresh na tela toda
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      filters: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string[] | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 15, start: data?.games?.data.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          // para passar no teste
          <p>Loading...</p>
        ) : (
          //<Loading />
          <section>
            {data?.games?.data.length ? (
              <>
                <Grid>
                  {data?.games?.data.map((game) => (
                    <GameCard
                      key={game.attributes?.slug}
                      title={game.attributes!.name}
                      slug={game.attributes!.slug}
                      developer={
                        game.attributes!.developers!.data[0].attributes!.name
                      }
                      img={`http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`}
                      price={game.attributes?.price}
                    />
                  ))}
                </Grid>

                <S.ShowMore role="button" onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMore>
              </>
            ) : (
              <Empty
                title=":("
                description="We din't find any games with this filter"
              />
            )}
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
