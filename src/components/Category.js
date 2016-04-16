import React, { Component } from 'react';
import ProductList from './ProductList';
import Pagination from './Pagination';


export default class Category extends Component {

  constructor(props) {
    super(props);

    this.params = {
      categoryId: props.params.categoryId,
      page: 1,
    };
    this.getProducts = this.getProducts.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  getProducts() {
    this.props.fetchProducts(this.params);
  }

  changePage(page) {
    this.params.page = page;
    this.getProducts();
  }

  componentDidMount() {
    this.getProducts();
  }


  componentWillReceiveProps(props) {
    if (this.params.categoryId !== props.params.categoryId) {
      this.params.categoryId = props.params.categoryId;
      this.getProducts();
    }
  }

  render() {
    const categoryId = this.props.params.categoryId;
    const { products } = this.props;


    return (
      <div>
        <h1>CategoryPage, {categoryId}</h1>
        <ProductList addProductToCart={this.props.addProductToCart}
          products={products} />
        <Pagination handler={this.changePage} meta={products.get('meta')} />
      </div>
    );
  }
}
