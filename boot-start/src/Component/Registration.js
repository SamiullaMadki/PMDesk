import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from 'react';
export default function Registration(){

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    password: '',
    companyId: '',
    allowAddTask:false,
    allowAddProject:false,
    allowEditTask:false
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 const id = Math.random().toString().slice(2, 12); // generate unique id
    setFormData({ ...formData, id }); // add id to form data
    await fetch('http://localhost:3001/registeruser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  }

  return (
    
    <div>
     
      <Container>
      
        <Row className="vh-110 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-7 " style={{ width: "40rem" }}>
              <Card.Body>
          
                <div className="mb-4 mt-md-4">
                  <img src={require('../Staticfiles/logo.jpg')} width="220" height="70"></img>
                  {/* <h2 className="fw-bold mb-2 text-center text-uppercase ">Bootstart</h2> */}
                   
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required="true" name="name"
                        value={formData.name}
                        onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="position">
                        <Form.Label className="text-center">
                          Position
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter your position in company" required="true" name="position"
                        value={formData.position}
                        onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="UniqueID">
                        <Form.Label className="text-center">
                          UniqueID
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter your company unique ID" required="true"name="companyId"
                        value={formData.companyId}
                        onChange={handleChange}/>
                        <p1 >(Unique ID is 10 digit unique number given to your Employer)</p1>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required="true" name="email"
                        value={formData.email}
                        onChange={handleChange}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  name="password"
                        value={formData.password}
                        onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={handleSubmit} >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="/" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}