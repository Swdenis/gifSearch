/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
import React, { useEffect, useState } from 'react'
import { Carousel } from '@giphy/react-components'
import { useDispatch, useSelector } from 'react-redux'
import { giphyFetch } from '../../api/giphy'
import { getGifs } from '../../redux/actions'
import { Container } from 'semantic-ui-react'

export default function Favorites() {
  const dispatch = useDispatch()

  const gifArray = Object.values(useSelector((state) => state.gifs))[0]

  const [gifs, setGifs] = useState({})

  useEffect(() => {
    dispatch(getGifs())
    gifArray && setGifs(Object.keys(gifArray))
    console.log(gifs)
  }, [])

  const fetchGifs = async () => {
    const result = await giphyFetch.gifs(gifs)
    return result
  }

  return gifs.length > 0 ? (
    <Container style={{ marginTop: '10px' }}>
      <Carousel fetchGifs={fetchGifs} gifHeight={400} gutter={6} />
    </Container>
  ) : (
    'Loading...'
  )
}
