import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartIcon>

export const Template: ComponentStory<typeof CartIcon> = (args) => (
  <CartIcon {...args} />
)

// Caso precise clonar
export const Basic = Template.bind({})
Basic.args = {
  quantity: 3
}
