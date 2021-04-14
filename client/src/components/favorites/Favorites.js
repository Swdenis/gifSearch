import React from 'react'
import { Carousel } from '@giphy/react-components'
import { useSelector } from 'react-redux'
import { giphyFetch } from '../../api/giphy'

export default function Favorites() {
  // const dispatch = useDispatch()

  const { gifs } = useSelector((state) => state.gifs) // string of fav gifs

  const fetchGifs = () => {
    giphyFetch.search(gifs)
  }
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />
}
