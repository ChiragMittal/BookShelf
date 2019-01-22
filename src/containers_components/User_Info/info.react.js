import React from 'react';


import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


// Flux product view
class FluxInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  // Add item to cart via Actions
  editInfo(event) {
    // var name= this.props.product.name;
    //var username= this.props.username;
    let fname = this.props.fname;
    let lname = this.props.lname;
    let dob = this.props.dob;
    let info = this.props.info

    let _this = this;

    _this.editInfo(data);

  }


  // Render product View
  render() {

    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-info">

        <h1 className="name">{this.props.fname} {this.props.lname}</h1>
        <h3 className="username">{this.props.username} </h3>
        <h3 className="dob">{this.props.dob}</h3>
        <h3 className="info">{this.props.info}</h3>



      </div>
    );
  }

};

export default FluxInfo;