import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
export default class UserSignUp extends Component {
  constructor(props){
    super(props);
    
  }
  
    render() {
        return (
            <div>
               <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <h1 style={{margin:"20px" ,textAlign:"center"}}>Sign up </h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
              <Form.Label >Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your name" onChange={this.props.handleChangeSignUp} />
              <Form.Label>Adress</Form.Label>
              <Form.Control type="name" placeholder="Enter your adress" onChange={this.props.handleChangeSignUp} />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={this.props.handleChangeSignUp} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Label>Phone number</Form.Label>
                <Form.Control placeholder="Enter phone number" onChange={this.props.handleChangeSignUp} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.props.handleChangeSignUp} />
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
