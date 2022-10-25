import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Basic = Template.bind({})

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}

Basic.args = {
  // aqui vai os argumentos de cada Component
  // exemplo: title: 'Teste',
}
