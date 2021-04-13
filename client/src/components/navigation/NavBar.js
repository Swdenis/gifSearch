import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

export default function NavBar() {
  return (
    <Container>
      <Menu secondary>
        <Menu.Item as={NavLink} to="/search" content="Search" />
        <Menu.Item as={NavLink} to="/favorites" content="My GIFs" />
      </Menu>
    </Container>
  )
}
