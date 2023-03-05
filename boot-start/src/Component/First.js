import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from './LoginForm';
function First() {
  <style>
 
</style>
  return (
   <div>
<Navbar variant="dark" className="bg-info">
        <Container >
          <Navbar.Brand href="#home">Boot-start</Navbar.Brand>
          <Nav className="me-right" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
   
      </Navbar>
      <LoginForm/>

    </div>
  
  )
}

export default First;