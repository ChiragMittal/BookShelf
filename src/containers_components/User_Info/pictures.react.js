import React from 'react';


import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


// Flux product view
class FluxPictures extends React.Component {

  // Add item to cart via Actions
  addPic(event) {
    // var name= this.props.product.name;
    let img = this.props.img;

    let _this = this;

    _this.addPhoto(data);
    // FluxCartActions.updateCartVisible(true);
  }

  delPic(event) {
    // var name= this.props.product.name;
    let img = this.props.img;

    let _this = this;

    _this.delPhoto(data);
    // FluxCartActions.updateCartVisible(true);
  }

  // Render product View
  render() {

    var imagePic = (this.props.img == null ? 'default.png' : this.props.img)
    return (
      <div id="flux-photo">
        <Image src={'../../public/img/' + imagePic} thumbnail />
      </div>
    );
  }

};

export default FluxPictures;