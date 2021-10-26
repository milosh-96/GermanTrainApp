import React, { Component } from 'react'

import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <img src="/logo.png" width="42"></img>
    </Navbar.Brand>
   
  </Container>
</Navbar>
        )
    }
}
