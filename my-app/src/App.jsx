import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import SlidesShow from "./Components/SlidesShow";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
const axios = require("axios");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      name: "",
      adress: "",
      email: "",
      phoneNumber: "",
      password: "",
      reservation: {
        name: "",
        adress: "",
        emailAdress: "",
        phoneNumber: "",
        message: "",
      },
      signIn: { email: "", password: "" },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSignUp = this.handleChangeSignUp.bind(this);
    this.handleSubmitClickSignIn=this.handleSubmitClickSignIn.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleSubmitClickRes = this.handleSubmitClickRes.bind(this);
  }

  // handle change function for the toggle
  handleChange(options) {
    this.setState({
      view: options,
    });
  }
  // handle change for sending data to the server
  handleSubmitClick() {
    axios
      .post("/signUp", {
        name: this.state.name,
        adress: this.state.adress,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        message: this.state.message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleSubmitClickSignIn() {
    axios
      .post("/signIn", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        alert('Hello in Our Company !');
      })
      .catch(function (error) {
        console.log(error);
        alert('Ooooppsss !!!')
      });
  }

  handleSubmitClickRes() {
    axios
      .post("/reservation", {
        name: this.state.name,
        adress: this.state.adress,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        message: this.state.message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // handle signUp change function to get the signUp inputs value
  handleChangeSignUp = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  // handle reservation change function
  handleChangeReservation = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };
  //handle change the sign in inputs
  handleChangeSignIn = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };
  componentDidMount() {
    // get request test
    axios.get("/hello").then(function (response) {
      // handle success
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <div
          className="nav-bar"
          style={{
            margin: 0,
            padding: 0,
            overflow: "hidden",
            backgroundColor: "black",
          }}>
          <span className="app-label" style={{ color: "red" }}>
          
            <img
              src="https://png.pngtree.com/templates_detail/20180726/initial-k-letter-logo-with-swoosh-colored-red-and-black-png_27642.jpg"
              width="100px"
            />
          </span>
          <span
            className={this.state.view === "home" ? "selected" : "unselected"}
            onClick={() => this.handleChange("home")}>
            Home
          </span>
          <span
            className={
              this.state.view === "presentation" ? "selected" : "unselected"
            }
            onClick={() => this.handleChange("presentation")}>
            Presentation
          </span>
          <span
            className={
              this.state.view === "services" ? "selected" : "unselected"
            }
            onClick={() => this.handleChange("services")}>
            Services
          </span>
          <span
            className={
              this.state.view === "contact" ? "selected" : "unselected"
            }
            onClick={() => this.handleChange("contact")}>
            Contact
          </span>
          <span
            className={this.state.view === "signUp" ? "selected" : "unselected"}
            onClick={() => this.handleChange("signUp")}>
            Sign up
          </span>
            <a href="https://www.facebook.com/Miltec-Environnement-106219201264484/">
            <Image 
            style={{marginLeft:"1000px"}}
            width="100px" 
            src="https://kikourvite.fr/wp-content/uploads/2020/02/facebook-icon-white-logo-png-transparent-300x293-300x293-1.png" className="githubIcon" />
            </a>
        </div>

        {this.state.view === "home" ? (
          <div>
            <SlidesShow />
            <Container
              style={{
                backgroundColor: "black",
                marginTop: "50px",
                marginBottom: "50px",
              }}>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <h1 style={{ margin: "20px", textAlign: "center" }}>
                    Welcome !{" "}
                  </h1>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Email address
                      </Form.Label>
                      <Form.Control name ="email"  onChange={this.handleChangeSignIn.bind(this)}type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Password
                      </Form.Label>
                      <Form.Control name="password"  onChange={this.handleChangeSignIn.bind(this)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        style={{ color: "red", fontSize: "20px" }}
                        type="checkbox"
                        label="Check me out"
                      />
                    </Form.Group>
                    <Button
                      style={{ backgroundColor: "red", fontSize: "20px", marginLeft:"300px" }}
                      variant="primary"
                      type="submit"
                      onClick={this.handleSubmitClickSignIn}>
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row><br></br>
            </Container>
          </div>
        ) : this.state.view === "presentation" ? (
          <Presentation />
        ) : this.state.view === "services" ? (
          <div>
            <Container style={{ marginTop: "50px", marginBottom: "100px" }}>
              <h1> Services Prices : </h1>
              <br></br>
              <Row>
                <Col xs={6} md={4}>
                  <h4>EMERGENCY UNCLOGGING</h4>
                  <Image
                    src="https://www.san-tunisie.com/wp-content/uploads/elementor/thumbs/icon1-1-o30rjz616qq5vrl1lvgw2al5o4t93n4vj2n07ggag8.png"
                    rounded
                  />
                  <h5 style={{ marginLeft: "25px" }}>15 $ </h5>
                </Col>
                <Col xs={6} md={4}>
                  <h4>VACUUM PIT AND CURVES</h4>
                  <Image
                    src="https://www.san-tunisie.com/wp-content/uploads/elementor/thumbs/icon4-1-o30rmggp804eipzc4g2g561y3ql4evzdjcm4sqrw14.png"
                    roundedCircle
                  />
                  <h5 style={{ marginLeft: "25px" }}>25 $ </h5>
                </Col>
                <Col xs={6} md={4}>
                  <h4>VACUUM PIT AND CURVES</h4>
                  <Image
                    src="https://www.san-tunisie.com/wp-content/uploads/elementor/thumbs/icon3-1-o30rmfiv1634740p9xntkoahicpr76vn77ynbgta7c.png"
                    thumbnail
                  />
                  <h5 style={{ marginLeft: "25px" }}>10 $ </h5>
                </Col>
              </Row>
            </Container>
            
            <Container
             style={{
              backgroundColor: "black",
              marginTop: "50px",
              marginBottom: "50px",
            }} >
              <Row>
                <h1 style={{ margin: "20px", textAlign: "center" }}>
                  Reservation Box :{" "}
                </h1>
                <Col md={{ span: 8, offset: 2 }}>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>Name</Form.Label>
                      <Form.Control
                        name="name"
                        onChange={this.handleChangeReservation.bind(this)}
                        type="name"
                        placeholder="Enter your name"
                      />
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>Adress</Form.Label>
                      <Form.Control
                        name="adress"
                        onChange={this.handleChangeReservation.bind(this)}
                        type="name"
                        placeholder="Enter your adress"
                      />
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>Email address</Form.Label>
                      <Form.Control
                        name="email"
                        onChange={this.handleChangeReservation.bind(this)}
                        type="email"
                        placeholder="Enter email"
                      />
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>Phone number</Form.Label>
                      <Form.Control
                        name="phoneNumber"
                        onChange={this.handleChangeReservation.bind(this)}
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                    <InputGroup size="lg">
                      <InputGroup.Prepend>
                        <InputGroup.Text
                          style={{ color: "black", fontSize: "20px" }}
                          name="message"
                          onChange={this.handleChangeReservation.bind(this)}
                          id="inputGroup-sizing-lg">
                          Message
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </InputGroup><br></br>
                    <Button
                    style={{ backgroundColor: "red", fontSize: "20px", marginLeft:"300px" }}
                      onClick={this.handleSubmitClickRes}
                      variant="primary"
                      type="submit">
                      Send
                    </Button>
                  </Form>
                </Col>
              </Row><br></br>
            </Container>
          </div>
        ) : this.state.view === "contact" ? (
          <Contact />
        ) : this.state.view === "signUp" ? (
          <div>
            <Container
              style={{
                backgroundColor: "black",
                marginTop: "50px",
                marginBottom: "50px",
              }}>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <h1 style={{ margin: "20px", textAlign: "center" }}>
                    Sign up{" "}
                  </h1>

                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Name
                      </Form.Label>
                      <Form.Control
                        name="name"
                        placeholder="Enter your name"
                        onChange={this.handleChangeSignUp.bind(this)}
                      />
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Adress
                      </Form.Label>
                      <Form.Control
                        name="adress"
                        placeholder="Enter your adress"
                        onChange={this.handleChangeSignUp.bind(this)}
                      />
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Email address
                      </Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        onChange={this.handleChangeSignUp.bind(this)}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Phone number
                      </Form.Label>
                      <Form.Control
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        onChange={this.handleChangeSignUp.bind(this)}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label style={{ color: "white", fontSize: "20px" }}>
                        Password
                      </Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={this.handleChangeSignUp.bind(this)}
                      />
                    </Form.Group>
                    <Button
                      style={{ backgroundColor: "red", fontSize: "20px", marginLeft:"300px" }}
                      variant="primary"
                      onClick={this.handleSubmitClick}>
                      Sign up
                    </Button>
                  </Form>
                </Col>
              </Row><br></br>
            </Container>
          </div>
        ) : null}
      </div>
    );
  }
}
