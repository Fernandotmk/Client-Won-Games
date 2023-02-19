import { fireEvent, screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      // slice para pegar apenas dois items do mock que tem varios
      <Gallery items={mockItems.slice(0, 2)} />
    )

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render open modal', () => {
    renderWithTheme(
      // slice para pegar apenas dois items do mock que tem varios
      <Gallery items={mockItems.slice(0, 2)} />
    )

    // selecionar o nosso modal
    const fullMenuElement = screen.getByLabelText('modal')

    // verficiar se o modal está escondido
    // utilizando o getAtrribute ele verifica como string por isso
    // está 'true'
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // clicar na imagem para abrir o modal e verificar se ele abriu
    // fire Event vem do testing library e permite que sejam
    // simuladas ações do usuário
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // // clicar no botão de fechar o modal e verificar se fechou
    // fireEvent.click(screen.getByLabelText(/close menu/i))
    // expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    // expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when overlay or button clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // clicar para fechar o modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when esc clicked', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    // selecionar o nosso modal
    const modal = screen.getByLabelText('modal')

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // apertando ESC para fechar o modal
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // clicar no thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // espero que a imagem da thumbnail seja aberta
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
