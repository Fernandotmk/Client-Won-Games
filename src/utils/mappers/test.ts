import { bannerMapper, gamesMapper, highlightMapper } from '.'
import {
  QueryHome_banners,
  QueryHome_sections_data_attributes_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      data: [
        {
          attributes: {
            image: {
              data: {
                attributes: {
                  url: '/image.jpg'
                }
              }
            },
            title: 'Banner title',
            subtitle: 'Banner subtitle',
            button: {
              label: 'button label',
              link: 'button link'
            },
            ribbon: {
              text: 'ribbon text',
              color: 'primary',
              size: 'small'
            }
          }
        }
      ]
    } as QueryHome_banners

    expect(bannerMapper(banner)).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const game = {
      data: [
        {
          id: '1',
          attributes: {
            name: 'game',
            slug: 'game',
            cover: {
              data: {
                attributes: {
                  url: '/image.jpg'
                }
              }
            },
            developers: {
              data: [
                {
                  attributes: {
                    name: 'developer'
                  }
                }
              ]
            },
            price: 10
          }
        }
      ]
    } as QueryGames_games

    expect(gamesMapper(game)).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: 'http://localhost:1337/image.jpg',
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should render if empty higlight', () => {
    return expect(highlightMapper(null)).toStrictEqual([])
  })

  it('should if have highlight game', () => {
    const highlight = {
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      background: { data: { attributes: { url: '/url' } } },
      floatimage: { data: { attributes: { url: '/url' } } },
      buttonLabel: 'label text',
      buttonLink: 'link text',
      aligment: 'left'
    } as QueryHome_sections_data_attributes_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'highlight title',
      subtitle: 'highlight subtitle',
      backgroundImage: 'http://localhost:1337/url',
      buttonLabel: 'label text',
      buttonLink: 'link text',
      floatImage: 'http://localhost:1337/url',
      alignment: 'left'
    })
  })
})
