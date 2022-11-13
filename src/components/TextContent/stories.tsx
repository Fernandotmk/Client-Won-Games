import { ComponentStory, ComponentMeta } from '@storybook/react'
import TextContent from '.'
import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: { default: 'won-dark' }
  }
} as ComponentMeta<typeof TextContent>

export const Template: ComponentStory<typeof TextContent> = (args) => (
  <TextContent {...args} />
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
