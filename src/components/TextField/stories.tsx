import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Email } from 'styled-icons/material-outlined'
import TextField from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as ComponentMeta<typeof TextField>

export const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <Email />
}

export const withError = Template.bind({})

withError.args = {
  error: 'Ops...something is wrong'
}
