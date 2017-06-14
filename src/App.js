import React, { Component } from 'react';
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Brand from './Brand'
import ProductList from './ProductList'

const Nav = () => (
  <ul>
    <li><Link to="/">Mega MakeUp Market</Link></li>
    <li><Link to="/brands">Brands</Link></li>
    <li><Link to="/cart"><img src="../cart.png" width="50px" /></Link></li>
  </ul>
)

class App extends Component {
  render() {
    var brands = this.props.brands.map(function(brand, index){
      return (
        <div>
          <Link key={index} to={`/brands/${brand}`}>{brand}</Link>
        </div>
      )
    })

    return (
        <div>
          <Nav />
          <div>
            {brands}
          </div>
          <Route path="/brands/:brand" component = {Brand, ProductList} />
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
