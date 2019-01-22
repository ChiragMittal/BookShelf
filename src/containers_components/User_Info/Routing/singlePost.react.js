import React from 'react';



// Flux product view
class FluxSinglePost extends React.Component {



  // Render product View
  render() {
    //var fav ={this.props.post.destination_categories}
    var imagePic = (this.props.post.image == null ? 'default.png' : this.props.post.image)
    return (
      <div className="flux-single-post">
        <div className="hello row">
          <img src={'../../../public/img/' + imagePic} className="post_userPic" />
          <p className="post_username">@{this.props.post.username}</p>
          <p className="post_time">{this.props.post.created_at}</p>
        </div>
        <p>{this.props.post.post}</p>
      </div>
    );
  }

};

export default FluxSinglePost;