import { ComponentStory, ComponentMeta } from '@storybook/react'
import Showcase from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  // o decorator faz com que todos novos templates abaixo
  // já fiquem com o padrao de margin 0 auto, centralizando o conteudo
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Showcase>

export const Template: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
)

Template.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight = Template.bind({})

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames = Template.bind({})

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}

// Caso precise clonar
// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
// }
