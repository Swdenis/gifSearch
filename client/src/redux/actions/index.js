import { SET_GIF } from './types'

export const setGif = (gif) => {
  console.log(gif)
  return { type: SET_GIF, payload: gif }
}

// // export const getGifs = (gifs) => {
// //     const response = //api get Get GIFs by ID Endpoint
// //   return { type: SET_GIF, payload: response }
// // }

// export const deleteGif = (gif) => {
//   return { type: DELETE_GIF, payload: gif }
// }
