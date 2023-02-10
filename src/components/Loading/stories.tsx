import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loading from '.'

export default {
  title: 'Loading',
  component: Loading
} as ComponentMeta<typeof Loading>

export const Template: ComponentStory<typeof Loading> = (args) => <Loading />

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
