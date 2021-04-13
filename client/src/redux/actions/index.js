import { SET_GIF } from "./types"

export const setGif = (gif) => {
    return {type: SET_GIF, payload: gif}
}