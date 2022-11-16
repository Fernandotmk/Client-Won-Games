import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="a gamer in a counch playing videogame"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {hasLink && (
      <Link href="" passHref>
        <Button as="a">Go back to Store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
