import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof ProfileMenu>

export const Template: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
