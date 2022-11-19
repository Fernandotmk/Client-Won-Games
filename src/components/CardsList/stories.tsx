import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardsList from '.'
import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as ComponentMeta<typeof CardsList>

export const Template: ComponentStory<typeof CardsList> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
