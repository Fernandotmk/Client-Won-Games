import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHilight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    // procurando 6 jogos contendo population zero
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
