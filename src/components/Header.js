import React, { Component } from 'react';
import { Link } from 'react-router';
import Cart from './../containers/Cart';

export default class Header extends Component {

	render () {
		return (
			<header>
				<h1>Header here</h1>
				<nav>
					<ul>
						<li><Link to={'/'}>Home</Link></li>
						<li><Link to={'/about'}>About</Link></li>
						<li><Link to={'/contact'}>Contact</Link></li>
					</ul>
				</nav>
				<Cart />
			</header>
		);
	}

}

