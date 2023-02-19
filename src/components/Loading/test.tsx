import { renderWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    // são três estapas do teste:
    // 1- renderizar o componente 'render' (cria um dom)
    // 2- seleconar o elemento a ser testado 'scren' (queries) - getByLabel...
    // 3- expect/assertion - comparação / análise (espero que renderize a logo branca)

    const { container } = renderWithTheme(<Loading />)

    const svgElement = container.querySelector("[data-icon='loading']")

    expect(svgElement?.classList.toString()).toContain('loading-svg')
    //expect(screen.getByRole('div', { name: /heading/i })).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
