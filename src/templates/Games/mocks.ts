import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, filters: {} }
  },
  result: {
    data: {
      games: {
        meta: {
          pagination: {
            total: 10
          }
        },
        data: [
          {
            id: 1,
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              price: 518.39,
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'sample developer'
                    }
                  }
                ]
              },
              categories: {
                data: [
                  {
                    attributes: {
                      name: 'action'
                    }
                  }
                ]
              },
              cover: {
                data: {
                  attributes: {
                    url: 'sample-game.jpg'
                  }
                }
              },
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, filters: {}, start: 1 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            id: 2,
            attributes: {
              name: 'Fetch More Game',
              slug: 'fetch-more',
              price: 518.39,
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'sample developer'
                    }
                  }
                ]
              },
              categories: {
                data: [
                  {
                    attributes: {
                      name: 'action'
                    }
                  }
                ]
              },
              cover: {
                data: {
                  attributes: {
                    url: 'sample-game.jpg'
                  }
                }
              },
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}

// request: {
//   query: QUERY_GAMES,
//   variables: { limit: 15 }
// },
// result: {
//   data: {
//     games: {
//       data: [
//         {
//           attributes: {
//             name: 'Dishonored: Complete Collection',
//             slug: 'dishonored-complete-collection',
//             cover: {
//               data: {
//                 attributes: {
//                   url: '/uploads/dishonored_complete_collection_9e901d58c9.jpg',
//                   __typename: 'UploadFile'
//                 },
//                 __typename: 'UploadFileEntity'
//               },
//               __typename: 'UploadFileEntityResponse'
//             },
//             developers: {
//               data: [
//                 {
//                   attributes: {
//                     name: 'Arkane Studios',
//                     __typename: 'Developer'
//                   },
//                   __typename: 'DeveloperEntity'
//                 }
//               ],
//               __typename: 'DeveloperRelationResponseCollection'
//             },
//             price: 64.99,
//             __typename: 'Game'
//           }
//         }
//       ]
//     }
//   }
// }
