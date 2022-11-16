import { ComponentStory, ComponentMeta } from '@storybook/react'
import Empty from '.'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    background: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Empty>

export const Template: ComponentStory<typeof Empty> = (args) => (
  <Empty {...args} />
)

Template.args = {
  title: 'Your  wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
