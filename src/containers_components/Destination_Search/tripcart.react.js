import React from 'react'
// import { updateCartVisible, removeFromCart } from '../../actions/fluxcartActions'

import { Button } from 'react-bootstrap';

// Flux cart view
class FluxCart extends React.Component {

  constructor(props) {
    super(props);
  }

  // Hide cart via Actions
  closeCart() {
    let _this = this
    _this.props.updateCartVisible(false);
  }

  // Show cart via Actions
  openCart() {
    let _this = this
    _this.props.updateCartVisible(true);
  }

  // Remove item from Cart via Actions
  removeFromCart(idx) {

    let _this = this

    _this.props.removeFromCart(idx);
    _this.props.updateCartVisible(false);
  }

  // Render cart view
  render() {
    let self = this, products = this.props.products;
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <button type="button" className="close-cart" onClick={this.closeCart.bind(this)}>&times;</button>
          <ul>
            {products.map(function (value, index) {
              return (
                <li key={index}>
                  <h1 className="name">{products[index].name}</h1>
                  <Button bsStyle="danger" bsSize="large" className="remove-item"
                    onClick={self.removeFromCart.bind(self, index)}>Remove
                  </Button>
                </li>
              );
            })}
          </ul>
          <span className="total">All Favourites</span>
        </div>
        <div className='aaa'>
          <Button bsStyle="info" bsSize="large" className="view-cart" onClick={this.openCart.bind(this)}
            disabled={Object.keys(this.props.products).length > 0 ? false : true}>View
          ({this.props.count})
        </Button>
        </div>
      </div>
    );
  }

};


export default FluxCart;
