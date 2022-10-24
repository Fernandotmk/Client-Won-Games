import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  // aqui vai os argumentos de cada Component
  // exemplo: title: 'Teste',
  children: 'Buy Now'
}

const withIcon: ComponentStory<typeof Button> = (args) => <Button {...args} />
export const withIconBind = withIcon.bind({})
withIconBind.args = {
  // aqui vai os argumentos de cada Component
  // exemplo: title: 'Teste',
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}
