import { ComponentStory, ComponentMeta } from '@storybook/react'
import Highlight from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
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
