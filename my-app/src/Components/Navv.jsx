import React, { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

class Navv extends Component {
  state = {};
  render() {
    return (
      <div >
        <Navbar bg="light" expand="lg"  >
          <Navbar.Brand href="#home">Ak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#presentation">Presentation</Nav.Link>
              
              <NavDropdown title="Our services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"> Services </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Reservations
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navv;
