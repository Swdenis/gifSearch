import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Search from './search/Search'
import Favorites from './favorites/Favorites'
import history from '../history'
import NavBar from './navigation/NavBar'

export default function App() {
  return (
    <>
      <Router history={history}>
        <Container>
          <Route path="/" component={NavBar} />
          <Route path="/Search" component={Search} />
          <Route path="/" exact component={Search} />
          <Route path="/favorites" component={Favorites} />
        </Container>
      </Router>
    </>
  )
}
