var React = require('react');
var FluxCartActions = require('../../User_Actions/user_actions.js');
var FluxSingleFavourites = require('./singleFavourites.react.js');


// Flux product view
var FluxMultiFavourites = React.createClass({

 function getCartState() {
  return {
    favourites : FavouritesStore.getpost()
  };
}


// Flux product view
var FluxMultiPost = React.createClass({

  // Get initial state from stores
  getInitialState: function () {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function () {
    FavouritesStore.addChangeListener(this._onChange);
    // CartStore.addChangeListener(this._onChange);
    // MapStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    FavouritesStore.removeChangeListener(this._onChange);
   // CartStore.removeChangeListener(this._onChange);
    // MapStore.removeChangeListener(this._onChange);
  },

  // Render product View
  render: function () {
    var multifav = this.props.favourites ;
    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-multi-favourites">
           <ul>
               {multifav.map(function(value,index){
                  return ( <FluxSingleFavourites favourite=value /> )
               })}
           </ul>
      </div>
    );
  },

   _onChange: function () {
    this.setState(getCartState());
  }


});

module.exports = FluxMultiFavourites;