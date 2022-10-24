import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

// keyof é um metodo do typscript que pega
// as chaves do item selecionado
// nesse caso pegou as chaves padroes do styled media query
// sendo por exemplo: medium: '768px' (a chave é o medium)
// entao ele pega todos os valores, small, medium ,large e huge

type breakpoint = keyof DefaultBreakpoints

export type mediaMatchProps = {
  // sem o keyof ficaria lessThan?: "small" | "medium" | "large" etc
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block`}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block`}
  `
}

// tipando o componente que podera receber os itens do tipo mediaMatchProps
export default styled.div<mediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
