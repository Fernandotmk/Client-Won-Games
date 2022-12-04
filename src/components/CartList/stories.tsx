import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartList, { CartListProps } from '.'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartList>

export const Template: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Template.args = {
  items: mockItems,
  total: 'R$ 330,00'
}

export const WithButton = Template.bind({})

WithButton.args = {
  hasButton: true,
  items: mockItems,
  total: 'R$ 330,00'
}

export const Empty = Template.bind({})

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
