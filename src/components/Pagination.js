import React, { Component } from 'react';

export default class Pagination extends Component {

	render(){
		const pagination = this.props.meta.get('pagination');
		const totalPages = pagination ? pagination.total_pages : 0;
		const currentPage = pagination ? pagination.page : 0;

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
