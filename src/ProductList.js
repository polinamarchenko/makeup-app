import React, { Component } from 'react';
import Brand from './Brand';
import axios from 'axios';


class ProductList extends Component {
  constructor(props) {
    super(props);
    const brand = props.match.params.brand;
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    this.getBrands(this.props.match.params.brand);
  }
  componentDidUpdate(){
    this.getBrands(this.props.match.params.brand);
  }

  getBrands(brand) {
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then(response => {
      let products = response.data.map((product) => {
        return {
          id: product.id,
          price: product.price,
          name: product.name,
          productType: product.product_type,
          image: product.image_link
        }
      });
      this.setState({products})
    });
  }

  render() {
    let data = this.state.products.map(product => (
      <div key={product.id}>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
        <img src={product.image}/>
        <p>Category: {product.productType}</p>
      </div>
    ))

    return (
      <div>
        {data}
      </div>
    );
  }
}

export default ProductList;
