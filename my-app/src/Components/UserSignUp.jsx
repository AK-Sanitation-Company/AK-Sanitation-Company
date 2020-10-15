import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
export default class UserSignUp extends Component {
    render() {
        return (
            <div>
               <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <h1 style={{margin:"20px" ,textAlign:"center"}}>Sign up </h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your name" />
              <Form.Label>Adress</Form.Label>
              <Form.Control type="name" placeholder="Enter your adress" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="Enter phone number" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container> 
            </div>
        )
    }
}
