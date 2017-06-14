import React, { Component } from 'react';
import axios from 'axios';


class ProductList extends Component {
  constructor(props) {
    super(props);
    // const brand = props.match.params.brand;
    this.state = {
      products: [],
    }
  }

  componentDidMount(){
    this.getBrands(this.props.match.params.brand);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.match.params.brand !== this.props.match.params.brand) {
      this.getBrands(this.props.match.params.brand);
    }
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
          image: product.image_link,
          description: product.description,
          colors: product.product_colors
        }
      });
      this.setState({products})
    });
  }

  render() {
    let data = this.state.products.map((product,id) => (
      <div className="product" key={id}>
        <h4>{product.name}</h4>
        <h5><a className="price" onClick={this.props.addToCart}>{product.price}</a></h5>
        <img alt="product" src={product.image}/>
        <p>Category: {product.productType}</p>
        <p className="description">{product.description}</p>
        <div>
          {product.colors.map((color,id) => (
            <div className="product-color" key={id} style={{backgroundColor: color.hex_value}}>
            </div>
          ))}
        </div>
      </div>
    ))

    return (
      <div className="product-list">
        {data}
      </div>
    );
  }
}

export default ProductList;
