import React, { Component } from 'react';

export default class Pagination extends Component {

	render(){
		const totalPages = this.props.meta.get('pagination').total_pages;
		const currentPage = this.props.meta.get('pagination').page;

		return (
			<ul>
				{
					[...Array(totalPages)].map((x, i) =>
			  		<li key={i + 1} className={ currentPage === (i + 1) ? "active" : ""}>
			  			<a href="#" onClick={e => {
				         e.preventDefault();
				         this.props.handler(i + 1);
				       }}>{i + 1}</a>
			  		</li>
				  )	
				}
			</ul>

		);
	}

}
