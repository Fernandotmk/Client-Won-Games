import { ComponentStory, ComponentMeta } from '@storybook/react'
import OrdersList from '.'

import itemsMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as ComponentMeta<typeof OrdersList>

export const Template: ComponentStory<typeof OrdersList> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
