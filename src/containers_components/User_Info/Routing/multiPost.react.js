import React from 'react';
import FluxSinglePost from './singlePost.react.js';




// Flux product view
class MultiPost extends React.Component {

  // Get initial state from stores
  // getInitialState: function () {
  //   return getCartState();
  // },

  // Add change listeners to stores
  componentDidMount() {

  }

  // Remove change listeners from stores
  componentWillUnmount() {

  }


  // Render product View
  render() {
    var multipost = this.props.posts;

    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-multi-post">
        <ul>
          {multipost.map(function (value, index) {
            return (<FluxSinglePost post={value} />)
          })}
        </ul>
      </div>
    );
  }


};

export default MultiPost;