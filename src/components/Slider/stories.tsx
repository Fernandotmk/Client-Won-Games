import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as ComponentMeta<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Template: ComponentStory<typeof Slider> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const vertifcalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false
}

export const Vertical: ComponentStory<typeof Slider> = () => (
  <Slider settings={vertifcalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

// export const Basic = Template.bind({})
// Basic.args = {
// aqui vai os argumentos de cada Component
// exemplo: title: 'Teste',
//}
