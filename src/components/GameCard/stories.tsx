import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as ComponentMeta<typeof GameCard>

export const Template: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon = Template.bind({})
WithRibbon.args = {
  ribbon: 'My Ribbon',
  ribbonSize: 'small',
  ribbonColor: 'secondary'
}
