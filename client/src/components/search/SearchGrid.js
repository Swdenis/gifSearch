import React, { useContext } from 'react'
import { Grid, SearchContext } from '@giphy/react-components'
import { useDispatch } from 'react-redux'
import { setGif } from '../../redux/actions'
import { Container } from 'semantic-ui-react'

export default function SearchGrid({ width }) {
  const onGifClick = (gif, e) => {
    e.preventDefault()
    dispatch(setGif(gif.id))
  }

  const dispatch = useDispatch()

  const { fetchGifs, searchKey } = useContext(SearchContext)
  return (
    <Container style={{ marginTop: '10px' }}>
      <Grid
        key={searchKey}
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        width={width}
        columns={3}
        gutter={6}
      />
    </Container>
  )
}
