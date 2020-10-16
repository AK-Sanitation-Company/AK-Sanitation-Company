import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { ListGroup } from "react-bootstrap";
class Contact extends Component {
  render() {
    const containerStyle = {
      width: "100%",
      height: "100%",
    };
    return (
      <div>
        <ListGroup style={{backgroundColor:"black"}} as="ul">
          <ListGroup.Item as="li" >
            <h1> Contact us</h1>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <h2> Adress: Ariana Tunis </h2>
          </ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            <h2> Headquarter: Djerba - Zarzis</h2>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <h2> Phone : +21658202884</h2>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <h2> Phone : +21654734755</h2>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <h2> Email : amirabourogaa0@gmail.com </h2>
          </ListGroup.Item>
        </ListGroup>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 36.94592,
            lng: 10.1711872,
          }}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCABJNvq7gj89EsfbRhnze6BaiD5igoF6k",
})(Contact);
