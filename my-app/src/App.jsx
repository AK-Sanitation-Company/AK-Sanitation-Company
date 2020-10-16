import React, { Component } from "react";
import "./App.css";
import UserSignIn from "./Components/UserSignIn";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Components/Footer";
import UserSignUp from "./Components/UserSignUp";
import Presentation from "./Components/Presentation";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import SlidesShow from "./Components/SlidesShow";

const axios = require("axios");
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(options) {
    this.setState({
      view: options,
    });
  }

  componentDidMount() {
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
        </div>

        {this.state.view === "home" ? (
          <div>
            <SlidesShow/>
            <UserSignIn />
            
          </div>
        ) : this.state.view === "presentation" ? (
          <Presentation />
        ) : this.state.view === "services" ? (
          <Services />
        ) : this.state.view === "contact" ? (
          <Contact />
        ) : null}
      <Footer/>  
      </div>
    );
  }
}
