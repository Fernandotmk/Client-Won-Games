import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Dropdown>

export const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

Template.args = {
  title: 'Click here',
  children: 'content'
}

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
