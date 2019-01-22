import React from 'react';


// Flux product view
class FluxFavourites extends React.Component {

  // Render product View
  render() {
    let fav = this.props.user.destination_categories
    //var imagePic = (this.props.user.image == null? 'default.png': this.props.user.image)
    return (
      <div className="flux-count">
        <ul>
          {fav.map(function (value, index) {
            <li key={index}>
              <h3 className="name">{fav[index]}</h3>
            </li>
          })}
        </ul>
      </div>
    );
  }

};

export default FluxFavourites;