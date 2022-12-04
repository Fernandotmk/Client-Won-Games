import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import items from 'components/CartList/mock'

import CartDropDown from '.'

describe('<CartDropDown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropDown items={items} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropDown items={items} total="R$ 300,00" />)

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    // pegando o primeiro item do items
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
