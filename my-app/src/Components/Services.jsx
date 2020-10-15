import React, { Component } from "react";
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
export default class Services extends Component {
  render() {
    return (
      <div>
       
        <div>
          
          <Container>
            <Row>

              <Col md={{ span: 8, offset: 2 }}>
              <h1> Services prices </h1>
             
                <h1 style={{ margin: "20px", textAlign: "center" }}>
                  Reservation box {" "}
                </h1>
                
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" />
                    <Form.Label>Adress</Form.Label>
                    <Form.Control type="name" placeholder="Enter your adress" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control placeholder="Enter phone number" />
                  </Form.Group>
                  <InputGroup size="lg">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-lg">
                        Message
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <Button variant="primary" type="submit">
                    Send
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
