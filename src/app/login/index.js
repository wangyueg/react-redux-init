import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import './index.scss';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.props.login.username,
			password: ''
		}
	}

	render() {
		return (
			<div className="loginContainer">
				<div className="inputContainer">
					<label htmlFor="username">用户名</label>
					<input type="text" id="username" />
				</div>
				<div className="inputContainer">
					<label htmlFor="password">密码</label>
					<input type="text" id="password" />
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.props.loginByAccount();
	}
}

export default connect(
	(state) => {
		return {login: state.Login}
	},
	(dispatch) => bindActionCreators({...actions}, dispatch)
)(Login);
