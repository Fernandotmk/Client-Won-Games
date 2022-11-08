import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('should render a white label', () => {
    // são três estapas do teste:
    // 1- renderizar o componente 'render' (cria um dom)
    renderWithTheme(<Logo />)

    // 2- seleconar o elemento a ser testado 'scren' (queries) - getByLabel...
    // 3- expect/assertion - comparação / análise (espero que renderize a logo branca)
    // No caso abaixo está testando se tem aria label (acessibilidade)
    // escrita Won Games dentro do svg, e também verifica se dentro do
    // pai do elemento (parentElement) nesse caso o Wrapper que envolve
    // tem o estilo de cor branca
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  // agora está testando quando a cor preta(escura) é passada, pois
  // por padrão já esta como white
  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  // quando o size não é passado
  it('shoulder render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  // quando o size é passado
  it('shoulder render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  // quando a logo muda ao ser mobile
  it('shoulder render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    // toHaveStyleRule esse método vem do jest para poder testar
    // media queries
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
