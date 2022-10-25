import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  // aqui vai os argumentos de cada Component
  // exemplo: title: 'Teste',
}

Basic.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
