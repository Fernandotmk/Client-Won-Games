import { useEffect, useState } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'
import xor from 'lodash.xor'
import Heading from 'components/Heading'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'

import * as S from './styles'
import { ParsedUrlQueryInput } from 'querystring'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

export type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  // toda vez que um valor mudar ele rodará o método onFilter
  useEffect(() => {
    onFilter(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleRadio = (name: string, value: string | boolean) => {
    //exemplo de [name]: value  ->> windows: true
    // s são os valores que já tem no Values, no caso começa vazio
    setValues((s) => ({ ...s, [name]: value }))
  }

  // []
  // ['windows']
  // ['windows', 'linux']
  // ao clicar no checkbox ele adiciona os valores
  // sem que repita duas vezes o windows por exemplo
  const handleCheckBox = (name: string, value: string) => {
    // pegando os values setado acima (initialValues)
    const currentList = (values[name] as []) || []
    // utilizando o metodo xor da biblioteca lodash para adicionar
    // os novos valores sem repiti-los
    // começa espalhando os valores antigos ...s
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  labelFor={field.name}
                  label={field.label}
                  // verificando se o campo está dentro do
                  // field item.name , exemplo verifica se windows
                  // está dentro de platform
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckBox(item.name, field.name)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  labelFor={field.name}
                  label={field.label}
                  // garantindo que sempre será uma String
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}
export default ExploreSidebar
