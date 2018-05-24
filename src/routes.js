import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Login from './app/login/index';
import Home from './app/home/index';

export default () => {
	return (
		<Router>			
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
			</div>
		</Router>
	);
}