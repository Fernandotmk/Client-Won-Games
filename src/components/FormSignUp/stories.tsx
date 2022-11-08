import { ComponentStory, ComponentMeta } from '@storybook/react'
import FormSignUp from '.'

export default {
  title: 'FormSignUp',
  component: FormSignUp
} as ComponentMeta<typeof FormSignUp>

export const Template: ComponentStory<typeof FormSignUp> = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
