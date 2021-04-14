import { DELETE_GIF, SET_GIF } from './types'

export const setGif = (gifId) => {
  console.log(gifId)
  return { type: SET_GIF, payload: gifId }
}

// export const getGifs = (gifs) => {
//     const response = //api get Get GIFs by ID Endpoint
//   return { type: SET_GIF, payload: response }
// }

export const deleteGif = (gif) => {
  return { type: DELETE_GIF, payload: gif }
}
