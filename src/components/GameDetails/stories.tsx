import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameDetails from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: { control: 'date' },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['Windows', 'Linux', 'Mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative']
      }
    }
  }
} as ComponentMeta<typeof GameDetails>

export const Template: ComponentStory<typeof GameDetails> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
