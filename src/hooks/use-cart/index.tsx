import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
}

// valor inicial array vazio
export const CartContextDefaultValues = {
  items: []
}

// primeiro criando o contexto
// que é o responsável por ter os estados
// podendo ser os itens, quantidade,
// métodos para add / remover do carrinho
// de compras etc...
export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

// O provider é reponsável por passar os estados
const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  // utilizando use efect sem dependencias []
  // pois assim ele executa uma vez
  // verifica se tem dados no localStorage
  // se tiver ele seta os dados no Context
  // para serem os mesmos do localStorage
  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

// criando um hook para facilitar o uso do
// useContext, podendo ser usado por ex:
// const { items, quantity } = useCart()
const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
