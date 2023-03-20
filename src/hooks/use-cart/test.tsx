import { renderHook } from '@testing-library/react'
import { setStorageItem } from 'utils/localStorage'

import { useCart, CartProvider, CartProviderProps } from '.'

describe('useCart', () => {
  it('should return items and its info if there are any in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    // renderizando o hook personalizado (useCart)
    // dentro do wrapper
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})
