import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class Contact extends Component {
  render() {
    
    const containerStyle = {
      position: 'fixed',  
      width: '100%',
      height: '100%'
    }
    return (
      <div>
        <h1> Contact us</h1>
        <p>
          <h2> Adress: Ariana Tunis </h2>
          <h2> Headquarter: Djerba - Zarzis</h2>
          <h2> Phone : +21658202884</h2>
          <h2> Phone : +21654734755</h2>
          <h2> Email : amirabourogaa0@gmail.com </h2>
        </p>
        <Map 
           google={this.props.google} zoom={14}
           initialCenter={{
            lat: 36.94592,
            lng: 10.1711872
          }}
            >
              
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
       
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCABJNvq7gj89EsfbRhnze6BaiD5igoF6k")
})(Contact)