import styled, { css } from 'styled-components'
// importando a tipagem feita no index
import { LogoProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;
      
      svg {
        height: 4.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
}

// informando que a função poderá receber os tipos da tipagem LogoProps
export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    // para não colocar acima color = 'white'
    // pois já está definido no index o padrao white
    // entao é colocado ! do lado de color
    color: ${theme.colors[color!]};

    // se o size existe ( usa dupla negação !! vira)
    ${!!size && wrapperModifiers[size]}

    // se estiver ativado como mobile
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
