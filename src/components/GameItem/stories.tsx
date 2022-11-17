import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameItem from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as ComponentMeta<typeof GameItem>

export const Template: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
)

export const WithPayment = Template.bind({})
WithPayment.args = {
  downloadLink: 'https://wongames.com/games/download',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
