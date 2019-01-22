import React from 'react';
import ReactDOM from 'react-dom';

import Map, { GoogleApiWrapper } from 'google-maps-react';
import Marker from 'google-maps-react/dist/components/Marker';
import InfoWindow from 'google-maps-react/dist/components/InfoWindow';
import axios from 'axios';


class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }
  // getInitialState() {
  //   return {
  //     showingInfoWindow: false,
  //     activeMarker: {},
  //     selectedPlace: {},

  //   }
  // }

  // componentDidMount() {
  //   var mapOptions = {
  //     center: this.mapCenterLatLng(43.642, -79.407),
  //   }
  // }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }

    let markerClick = this.onMarkerClick;
    return (
      <Map google={this.props.google}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        initialCenter={this.props.initialCenter}
        center={this.props.initialCenter}
        className={'map'}
        zoom={10}
        onClick={this.onMapClicked}>



        {(this.props.markers).map(function (value, index) {
          return (
            <Marker
              onClick={markerClick}
              name={value.name}
              position={{ lat: value.lat, lng: value.lng }} />

          )
        })}


        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
          <div>
            <h1>{Object.keys(this.state.selectedPlace).length ? 'this.state.selectedPlace.name' : ''}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCrrMu2jrAV0faDFlMbsHDCBb26p9CppuM",
  libraries: ['places', 'visualization']
})(Container);


