import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="Checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    // quando quisermos algo que não deve estar no dom
    // devemos utilizar o queryByLabelText
    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    // quando quisermos algo que não deve estar no dom
    // devemos utilizar o queryByLabelText
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status changed', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="CheckBox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    // user event simula o evento de click
    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  // quando está marcado
  it('should dispatch onCheck when status changed', async () => {
    // jest.fn é um observador que
    // quando a função onCheck for ativada ele avisa
    // ela é chamada no index js ao marcar o checkbox
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="CheckBox" onCheck={onCheck} isChecked />)

    // espera que a função onCheck nao seja chamada (no index)
    expect(onCheck).not.toHaveBeenCalled()

    // user event simula o evento de click
    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      // espera que a função onCheck seja chamada (no index)
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should  be acessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
