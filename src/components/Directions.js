/* eslint-disable no-undef */
import React, { Component } from 'react';

class Directions extends Component {
  constructor(props) {
    super(props);

    this.state = { open: null };
  }

  componentDidMount() {
    let that = this, googleMap = new google.maps.Map(this.map, {
      zoom: 18,
      center: {
        lat: 30.2739876,
        lng: -97.7633791
      }
    });

    new google.maps.places.PlacesService(googleMap).getDetails({
      placeId: 'ChIJGWlp_T-1RIYRdeyIEts-Neg'
    }, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        let info = new google.maps.InfoWindow();
        let marker = new google.maps.Marker({
          map: googleMap,
          position: place.geometry.location
        });

        info.setContent(`<div><strong>${place.name}</strong><br>${place.formatted_address}</div>`);
        info.open(googleMap, marker);

        that.setState({ open: place.opening_hours && place.opening_hours.open_now === true });
      }
    });
  }

  render() {
    return (
      <div className="directions">
        <div className="googleMap" ref={ (map) => this.map = map } />
        <div className="openText" style={{ color: (this.state.open ? "green" : "red") }}>
          {this.state.open !== null ? "We're " + (this.state.open ? "open!!" : "closed :(") : ""}
        </div>
      </div>
    );
  }
}

export default Directions;
