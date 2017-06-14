import React, { Component } from 'react';

class Cart extends Component {
  render() {
          console.log(this.props.cart);
    var cart = this.props.cart.map((product, id) => {
      return <li key={id}>
        <div>{product}</div>
      </li>
    })

    return (
        <div>
          <ul>
            {cart}
          </ul>
        </div>

    );
  }
}
