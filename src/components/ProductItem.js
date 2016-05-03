import React, { Component } from 'react';

export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.changeCount = this.changeCount.bind(this);
  }

  addProductToCart(e) {
    e.preventDefault();
    this.props.addProductToCart(this.props.product, this.state.count);
    this.setState({ count: 1});
  }

  changeCount(e) {
    this.setState({ count: Number(e.target.value) });
  }

  render() {
    const { product } = this.props;

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{product.title}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-sm-6">
              <img src={product.images[0].file} alt={product.title} className="img-thumbnail" />
            </div>
            <div className="col-sm-6">
              <h3>{product.price}$</h3>
              <p>{product.description}</p>
              <input className="form-control" type="number" min="1" step="1" max={product.quantity} value={this.state.count}
                onChange={this.changeCount}
              />
              <button className="btn btn-lg btn-primary" onClick={this.addProductToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
