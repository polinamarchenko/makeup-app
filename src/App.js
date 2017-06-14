import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Brand from './Brand'
import ProductList from './ProductList';
import './App.css'
import Cart from './Cart';

const Nav = () => (
  <ul className="main-nav">
    <li><h1><Link className="nav-link" to="/">Mega MakeUp Market</Link></h1></li>
    <li><h2><Link className="nav-link" to="/brands">Brands</Link></h2></li>
    <li className="cart"><Link to="/cart"><img src="../cart.png" alt="cart" width="50px" /></Link></li>
  </ul>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(id) {
    var product = this.state.products[id];
    var cart = this.state.cart.slice();
    cart.push({...product});
    this.setState({cart});
    console.log(cart);
  }

  render() {
    var brands = this.props.brands.map(function(brand, index){
      return (
        <div key={index}>
          <Link className="brand" to={`/brands/${brand}`}>{brand}</Link>
        </div>
      )
    })

    return (
        <div>
          <div className="top-nav">
            <Nav />
          </div>
          <div className="brand-list">
            {brands}
          </div>
          <div>
            <Route path="/brands/:brand" component = {Brand} />
            <Route path="/brands/:brand" component = {ProductList} />
            <Route path="/cart" component = {Cart} />
          </div>

        </div>
    );
  }
}

App.defaultProps = {
  brands: [
  "almay", "annabelle", "benefit", "covergirl", "dalish", "e.l.f.", "essie", "iman", "l'oreal",
  "marcelle", "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nyx", "orly", "pacifica", "physicians", "formula", "anada", "revlon", "salon", "sante", "sinful", "smashbox", "stila", "suncoat", "zorah"
  ]
}

export default App;
