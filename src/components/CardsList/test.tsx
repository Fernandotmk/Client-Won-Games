import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CardsList from '.'
import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    // são três estapas do teste:
    // 1- renderizar o componente 'render' (cria um dom)
    // 2- seleconar o elemento a ser testado 'scren' (queries) - getByLabel...
    // 3- expect/assertion - comparação / análise (espero que renderize a logo branca)

    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
    // expect(container.firstChild).toMatchSnapshot()
  })
})
