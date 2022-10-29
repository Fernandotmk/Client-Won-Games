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

export const Template: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Highlight {...args} />
  </div>
)

export const WithImage = Template.bind({})
WithImage.args = {
  floatImage: '/img/red-dead-float.png'
}
