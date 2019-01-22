var React = require('react');
var FluxCartActions = require('../../User_Actions/user_actions.js');


// Flux product view
var FluxSingleFavourites = React.createClass({

  // Add item to cart via Actions
  // editInfo: function (event) {
  //     // var name= this.props.product.name;
  //     // var username= this.props.user.username;
  //      var fname= this.props.user.fname;
  //      var lname= this.props.user.lname;
  //      var dob= this.props.user.dob;
  //      var info= this.props.user.info; 

  //   FluxCartActions.editInfo(fname,lname,dob,info);
  //  // FluxCartActions.updateCartVisible(true);
  // },


  // Render product View
  render: function () {
    //var fav ={this.props.post.destination_categories}
    var imagePic = (this.props.favourite.image == null? 'default.png': this.props.favourite.image)
    return (
      <div className="flux-trip">
        <div className="flux-product-detail">
          <h1 className="name">{this.props.favourite.name}</h1>
           <img src={'img/' + imagePic}/>
          <p className="description">{this.props.favourite.description}</p>
          
        </div>
      </div>
    );
  }

});

module.exports = FluxSingleFavourites;