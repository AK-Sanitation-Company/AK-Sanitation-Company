import React, { Component } from "react";
import "./App.css"
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
        <h1>welcome in sanitation company </h1>
      </div>
    );
  }
}
