import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number | undefined
  // o InputHTMLAttributes fornece propriedades extras como name etc.
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  // com o props é possível passar qualquer outra
  // propriedade do InputHTMLAttributes
  ...props
}: CheckboxProps) => {
  //cntrolled component (state)
  const [checked, setChecked] = useState(isChecked)

  // quando mudar ativa a função
  const onChange = () => {
    // status vai ser o contrario de checked, que começa como false
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
    // poderia ser tb
    // !!onCheck && onCheck(status)
  }
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
