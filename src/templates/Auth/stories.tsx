import { ComponentStory, ComponentMeta } from '@storybook/react'
import Auth from '.'

export default {
  title: 'Auth',
  component: Auth
} as ComponentMeta<typeof Auth>

export const Template: ComponentStory<typeof Auth> = (args) => (
  <Auth {...args} />
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
