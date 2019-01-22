var React = require('react');
var FluxCartActions = require('../../User_Actions/user_actions.js');
var FluxSinglePost = require('./singlePost.react.js');


var PostsStore = require('../../User_Stores/postingStores');


// Method to retrieve state from Stores
function getCartState() {
  return {
    posts : PostsStore.getpost()
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
    PostsStore.addChangeListener(this._onChange);
    // CartStore.addChangeListener(this._onChange);
    // MapStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores
  componentWillUnmount: function () {
    PostsStore.removeChangeListener(this._onChange);
   // CartStore.removeChangeListener(this._onChange);
    // MapStore.removeChangeListener(this._onChange);
  },


  // Render product View
  render: function () {
    var multipost = this.state.posts ;

    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-multi-post">
           <ul>
               {multipost.map(function(value,index){
                   return (<FluxSinglePost post={value}/>)
               })}
           </ul>
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function () {
    this.setState(getCartState());
  }

});

module.exports = FluxMultiPost;