import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    // são três estapas do teste:
    // 1- renderizar o componente 'render' (cria um dom)
    // 2- seleconar o elemento a ser testado 'scren' (queries) - getByLabel...
    // 3- expect/assertion - comparação / análise (espero que renderize a logo branca)

    const { container } = renderWithTheme(<Banner {...props} />)

    // verificando se o title está renderizando
    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    // verificando se o subtitle está renderizando
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    // verificando se a img está renderizando
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with theme', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
