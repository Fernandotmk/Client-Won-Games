import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'FormProfile',
  component: FormProfile
} as ComponentMeta<typeof FormProfile>

export const Template: ComponentStory<typeof FormProfile> = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
