import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import Base from 'templates/Base'
import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('Filter')}
      />
      <section>
        <Grid>
          {games.map((item) => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('Teste')}>
          <p>Show More</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default GamesTemplate
