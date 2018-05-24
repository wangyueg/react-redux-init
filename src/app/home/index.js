import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div>
				<Link to='/login'>登录</Link>
			</div>
		);
	}
}

export default Home;