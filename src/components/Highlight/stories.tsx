import { ComponentStory, ComponentMeta } from '@storybook/react'
import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead its back',
    subtitle: 'Come see Johns new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    alignment: 'right'
  }
} as ComponentMeta<typeof Highlight>

const Template: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  // aqui vai os argumentos de cada Component
  // exemplo: title: 'Teste',
}

const WithImage: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage = WithImage.bind({})
WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
