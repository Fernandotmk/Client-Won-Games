import { render, screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import BannerSlider from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render the heading', () => {
    // são três estapas do teste:
    // 1- renderizar o componente 'render' (cria um dom)
    // 2- seleconar o elemento a ser testado 'scren' (queries) - getByLabel...
    // 3- expect/assertion - comparação / análise (espero que renderize a logo branca)

    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  // renderizar um item por vez
  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    // verificando se tem 2 slides
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)

    // verificiando se tem um ativo
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
