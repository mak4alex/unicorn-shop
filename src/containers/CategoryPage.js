import React, { Component } from 'react';


export default class CategoryPage extends Component {

	componentDidMount() {
		console.log('CategoryPage mount', this.props.params.category)
	}

	componentWillReceiveProps(nextProps) {
		console.log('CategoryPage componentWillReceiveProps', nextProps.params.category)
	}

  render() {
  	const category = this.props.params.category;

    return (
      <div>
        <h1>CategoryPage, {category}</h1>
      </div>
    );
  }
}
