import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import React from 'react'

// Aqui criamos a função renderWithTheme que servirá para os componentes
// que forem testados e que tiverem relações css com o theme (styles)
// como children poderá receber qualquer elemento React, que após o teste
// será tipado como o tipo RenderResult
export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  // a função renderWithTheme terá que renderizar um ThemeProvider
  // assim como é feito no arquivo raiz _app.tsx
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

// se o componente não tiver relação com  o theme , devemos utilizar
// a função render que vem padrão do testing-library
