import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartDropDown from '.'
import items from 'components/CartList/mock'

export default {
  title: 'CartDropDown',
  component: CartDropDown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items,
    total: 'R$ 300,00'
  }
} as ComponentMeta<typeof CartDropDown>

export const Template: ComponentStory<typeof CartDropDown> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropDown {...args} />
  </div>
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
