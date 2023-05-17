import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from './LoginForm';
import logo from '../Staticfiles/pmdesk.jpg';

function First() {
  <style>

  </style>
  return (
    <div>
      


      <Navbar variant="dark" className="bg-info">
        <Container >
          <Navbar.Brand href="/"><div> <img src={logo}></img> </div></Navbar.Brand>
          <Nav className="me-right" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="">Features</Nav.Link>
            <Nav.Link href="https://getbootstrap.com/docs/5.0/examples/pricing/">Pricing</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
      <LoginForm />

    </div>

  )
}

export default First;