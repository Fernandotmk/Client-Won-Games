import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Buy Now'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const withIcon = Template.bind({})
withIcon.args = {
  size: 'small',
  icon: <AddShoppingCart />
}

export const asLink = Template.bind({})
asLink.args = {
  size: 'large',
  as: 'a',
  href: '/link'
}
