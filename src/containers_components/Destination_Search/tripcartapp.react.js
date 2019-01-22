import React from 'react';
//import { CartStore } from '../../Stores/cartStore';
//import { ProductStore } from '../../Stores/tripStore';
//import { MapStore } from '../../Stores/mapStore';
import { FluxProduct } from './trip.react.js';
import { FluxCart } from './tripcart.react.js';
//var Container=require('./container.react.js');
import Container from './container.react.js';

//import NpsForecastMap from './container.react.js';


// Method to retrieve state from Stores
function getCartState() {
  return {
    product: {},
    selectedProduct: {},
    cartItems: {},
    cartCount: {},
    // cartTotal: CartStore.getCartTotal(),
    cartVisible: {},
    //,user: CartStore.getUserLoggedIn()            -> server request for logged in user data
    mapMarkers: {},
    mapCentre: {}
  };
}

class FluxCartApp extends React.Component {

  getInitialState() {
    return getCartState();
  }

  componentDidMount() {
    console.log('aaa')
  }

  componentWillUnmount() {
    console.log('000')
  }

  render() {
    console.log('bbb')
    return (
      // <div className="flux-cart-app">

      //   <Container google={window.google} markers={this.props.Destination.mapMarkers} initialCenter={this.props.Destination.mapCentre} />

      //   <FluxCart products={this.props.Destination.cartItems} count={this.props.Destination.cartCount} visible={this.props.Destination.cartVisible} />

      //   {(this.props.Destination.product).map(function (value, index) {
      //     return (
      //       <FluxProduct product={value} />
      //     )
      //   })}

      // </div>
      <h1>aaa</h1>
    );
  }


};

export default FluxCartApp;
