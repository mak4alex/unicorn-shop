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
    this.fetchData = this.fetchData.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  fetchData() {
    this.props.fetchProducts(this.params);
    this.props.fetchCategory(this.params);
  }


  changePage(page) {
    this.params.page = page;
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }


  componentWillReceiveProps(props) {
    if (this.params.categoryId !== props.params.categoryId) {
      this.params.categoryId = props.params.categoryId;
      this.fetchData();
    }
  }

  render() { 
    const { products, category } = this.props;
    const currentCaregory = category.get('current');

    return (
      <div>
        <div className="page-header">
          <h1>{currentCaregory.title}</h1>
          <p>{currentCaregory.description}</p>
        </div>
        <ProductList addProductToCart={this.props.addProductToCart}
          products={products}
        />
        <Pagination handler={this.changePage} meta={products.get('meta')} />
      </div>
    );
  }
}
