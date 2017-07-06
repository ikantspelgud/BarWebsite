/* eslint-disable no-undef */
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, DirectionsRenderer, Marker, InfoWindow } from 'react-google-maps';

const DirectionsGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={props.location}>
      {props.directions && <DirectionsRenderer directions={props.directions} />}
      <Marker position={props.location}>
        <InfoWindow>
          <div><strong>Donn's Depot</strong><br/>1600 West 5th Street, Austin, TX 78703</div>
        </InfoWindow>
      </Marker>
  </GoogleMap>
));

export default class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: new google.maps.LatLng(30.27411219999999, -97.7633659),
      directions: null
    };
    this.updateDirections = this.updateDirections.bind(this);
    this.DirectionsService = new google.maps.DirectionsService();
  }

  updateDirections(e) {
    e.preventDefault();
    if (this.state.location) {
      this.DirectionsService.route({
        origin: this.start.value,
        destination: this.state.location,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({ directions: result });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  }

  render() {
    return (
      <div className="directions">
        <form className="form-group form-inline" onSubmit={this.updateDirections}>
          <input
            type="text"
            className="form-control"
            placeholder="Starting point"
            ref={(input) => this.start = input}
          />
          <button type="submit" className="btn btn-primary">Get Directions</button>
        </form>
        <DirectionsGoogleMap
          containerElement={
            <div className="googleMap"/>
          }
          mapElement={
            <div style={{ height: "100%", width: "100%" }} />
          }
          center={this.state.location}
          location={this.state.location}
          directions={this.state.directions}
        />
      </div>
    );
  }
}

/*
  // If react-google-maps ever allows us to access the Google maps instance,
  // we can go back to using the PlacesService to show the location of Donn's.
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
        console.log(place.geometry.location);
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
*/
