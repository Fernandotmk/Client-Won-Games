import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {

    // são três estapas do teste:
    // 1- renderizar o componente 'render' (cria um dom)
    // 2- seleconar o elemento a ser testado 'scren' (queries) - getByLabel...
    // 3- expect/assertion - comparação / análise (espero que renderize a logo branca)

    const { container } = render(<Home />)

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
