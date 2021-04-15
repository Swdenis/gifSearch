import React from 'react'
import { SearchBar } from '@giphy/react-components'
import { Container, Header } from 'semantic-ui-react'

export default function SearchBarComponent() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
      <div style={{ flexBasis: '40%' }}>
        <SearchBar />
      </div>
      <Header as="h2" color="grey" style={{ flexBasis: '30%', marginBottom: '20px' }}>
        Click on GIF to add to favorites
      </Header>
    </Container>
  )
}
