import React, { useState } from 'react'
import { Grid } from '@giphy/react-components'
import ResizeObserver from 'react-resize-observer'
import { giphyFetch } from '../../api/giphy'

export default function Search() {
  const fetchGifs = () => giphyFetch.trending({ limit: 10 })

  const [width, setWidth] = useState(window.innerWidth)
  return (
    <>
      <Grid onGifClick={onGifClick} fetchGifs={fetchGifs} width={width} columns={3} gutter={6} />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width)
        }}
      />
    </>
  )
}
