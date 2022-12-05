import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof Menu>

export const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
)

export const Logged = Template.bind({})

Logged.args = {
  username: 'Fernando'
}
