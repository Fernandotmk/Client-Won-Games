import { ComponentStory, ComponentMeta } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Basic = Template.bind({})
Basic.args = {
  // aqui vai os argumentos/propriedades que já abrem como
  // padrão no storybook de cada Component
  // exemplo: title: 'Teste',
  color: 'white',
  hideOnMobile: true
}
