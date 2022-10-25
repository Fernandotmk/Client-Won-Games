import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

describe('<Button />', () => {
  // está setado como padrao o tamanho medium
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      // como font-size tem o traço é neessário coloca entre aspas
      'font-size': '1.4rem'
    })

    // feito um spanshot para manter a estrutura do codigo
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size by default', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    // small nao é passado o padding, seguindo o styles que
    // tb nao é passado por lá
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size by default', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the full width', () => {
    // como é um bollean nao é necessáro passar true
    renderWithTheme(<Button fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    // como é um bollean nao é necessáro passar true
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  // testando os novos atributos
  it('should render Button as a link', () => {
    const { debug, container } = renderWithTheme(
      <Button as="a" href="/link">
        Buy Now
      </Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
