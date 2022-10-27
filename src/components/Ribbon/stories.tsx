import { ComponentStory, ComponentMeta } from '@storybook/react'
import Ribbon from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Ribbon>

const Template: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  // aqui vai os argumentos de cada Component
  // exemplo: title: 'Teste',
}
