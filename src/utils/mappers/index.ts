/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_data_attributes_freeGames_highlight
} from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners) => {
  return banners?.data.map((banner) => ({
    img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
    title: banner.attributes?.title,
    subtitle: banner.attributes?.subtitle,

    ...(banner.attributes?.button && {
      buttonLabel: banner.attributes.button.label,
      buttonLink: banner.attributes.button.link
    }),

    ...(banner.attributes?.ribbon && {
      ribbon: banner.attributes.ribbon.text,
      ribbonColor: banner.attributes.ribbon.color,
      ribbonSize: banner.attributes.ribbon.size
    })

    // Poderia ser utilizando || null no final
    // buttonLabel: banner.attributes?.button?.label || null,
    // buttonLink: banner.attributes?.button?.link || null,
    // ribbon: banner.attributes?.ribbon?.text || null,
    // ribbonColor: banner.attributes?.ribbon?.color || null,
    // ribbonSize: banner.attributes?.ribbon?.size || null
  }))
}

export const gamesMapper = (games: QueryGames_games | null) => {
  return games
    ? games?.data.map((game) => ({
        id: game.id,
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        // poderia fazer um map mas como só tem um
        // pegamos o primeiro[0]
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_data_attributes_freeGames_highlight | null
) => {
  return highlight
    ? {
        title: highlight?.title,
        subtitle: highlight?.subtitle,
        backgroundImage: `http://localhost:1337${highlight?.background.data?.attributes?.url}`,
        buttonLabel: highlight?.buttonLabel,
        buttonLink: highlight?.buttonLink,
        floatImage: `http://localhost:1337${highlight?.floatimage?.data?.attributes?.url}`,
        alignment: highlight?.aligment
      }
    : []
}
