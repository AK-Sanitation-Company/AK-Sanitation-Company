import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class UserSignIn extends Component {
  state = {};
  render() {
    return (
      <Container style={{backgroundColor:"black"}}>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
          <h1 style={{margin:"20px" ,textAlign:"center"}}>Welcome ! </h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color:"white", fontSize:'20px'}}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color:"white", fontSize:'20px'}} >Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check style={{color:"red", fontSize:'20px'}}type="checkbox" label="Check me out" />
              </Form.Group>
              <Button style={{backgroundColor:"red", fontSize:'20px'}} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default UserSignIn;
