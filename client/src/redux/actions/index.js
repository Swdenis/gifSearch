/* eslint-disable space-before-function-paren */
import axios from '../../api/axios'
import { DELETE_GIF, SET_GIF } from './types'

export const setGif = (gifId) => async (dispatch) => {
  const response = await axios.post('/gifs', { id: gifId })
  dispatch({ type: SET_GIF, payload: response.data.data })
}

export const getGifs = () => async (dispatch) => {
  const response = await axios.get('/gifs')
  const gifs = response.data.data.reduce(convertArrayToObject, {})
  dispatch({ type: SET_GIF, payload: gifs })
}

export const deleteGif = (gifId) => async (dispatch) => {
  const response = await axios.delete(`/gifs/${gifId}`)
  console.log(response.data)
  dispatch({ type: DELETE_GIF, payload: gifId })
}

function convertArrayToObject(result, item) {
  const key = Object.values(item)
  result[key] = item
  return result
}
