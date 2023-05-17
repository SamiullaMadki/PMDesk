import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Staticfiles/pmdesk.jpg';

function ProjectNavbar() {
  return (
    <Navbar className='sidebar' variant="light">
        <Container>
          <Navbar.Brand href="/"><div> <img src={logo}></img> </div></Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">SignOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default ProjectNavbar