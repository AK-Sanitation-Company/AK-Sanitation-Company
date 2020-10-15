import React, { Component } from "react";
import "./App.css"
import UserSignIn from "./Components/UserSignIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navv from "./Components/Navv";
import Footer from './Components/Footer';
import UserSignUp from './Components/UserSignUp';
import Presentation from './Components/Presentation';
import Services from './Components/Services';
import Contact from './Components/Contact'


const axios = require("axios");
export default class App extends Component {
  componentDidMount() {
    axios.get("/hello").then(function (response) {
      // handle success
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <Navv/>
        <UserSignUp/>
        <UserSignIn/>
        <Services/>
        <Contact/>
        {/* <Presentation/> */}
        {/* <Footer/> */}
      </div>
    );
  }
}
