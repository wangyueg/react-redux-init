import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Switch, Layout, Icon, Breadcrumb } from 'antd';
import Contents from './content';
import { menus } from './menu';
import pathToRegexp from 'path-to-regexp';
import './index.less';

const { Sider, Header } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
	constructor(props) {
		super(props);

		this._getMenus = this._getMenus.bind(this);
		this._getSubMenus = this._getSubMenus.bind(this);
		this._getHeaderMenus = this._getHeaderMenus.bind(this);
		this._getOpenKes = this._getOpenKes.bind(this);
		this._onOpenChange = this._onOpenChange.bind(this);
		this._getRootSubMenuKeys = this._getRootSubMenuKeys.bind(this);

		this.state = {
			subOpenKeys: this._getOpenKes('sub') || ['user', 'organization'], //当前展开的SubMenu菜单项key数组
			rootSubMenuKeys: this._getRootSubMenuKeys(menus) || ['user', 'deliverorders']
		}
	}

	_getHeaderMenus(menus) {
		return menus.map((item) => {
			return (
		        <Menu.Item key={item.url}>
		            <Link to={item.defaultUrl}>
		            	<span>{item.name}</span>
		            </Link>
		        </Menu.Item>
	      	)
		});
	}

	// 递归生成子导航菜单
	_getSubMenus(subMenus) {
		return subMenus.map((item) => {
	      	if (item.children) {
		        return (
		          	<SubMenu
			            key={item.url}
			            title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
			        >
		           		{this._getSubMenus(item.children)}
		          	</SubMenu>
		        )
	      	}
	      	return (
		        <Menu.Item key={item.url}>
		            <Link to={item.url}>
		            	<Icon type={item.icon} /><span>{item.name}</span>
		          	</Link>
		        </Menu.Item>
	      	)
	    })
	}

	_getMenus(menus, currentHeaderMenu) {
		//获取一级导航对应的子导航
		let subMenus = [];
		for(let i=0; i<menus.length; i++) {
			if(menus[i]['url'] === currentHeaderMenu) {
				subMenus = menus[i]['children'];
			}
		}
	    
	    return this._getSubMenus(subMenus);
	}

	_headerMenuClickHandle(menus, e) {
		//改变subOpenKeys
		this.setState({
			subOpenKeys: this._getOpenKes('sub'),
			rootSubMenuKeys: this._getRootSubMenuKeys(menus) //重新设置rootSubmenuKeys
		});		
	}

	_getRootSubMenuKeys(menus) {
		let arr = [];
		let currentSubMenus;
		if(!this._getOpenKes()) return '';
		for(let j=0; j<menus.length; j++) {
			if(this._getOpenKes()[0] === menus[j]['url']) {
				currentSubMenus = menus[j]['children'];
			}
		}

		for(let i=0; i<currentSubMenus.length; i++) {
			arr.push(currentSubMenus[i]['url']);
		}

		return arr;
	}

	_getOpenKes(type) {
		let pathname = location.pathname;
		if(pathname.substring(1, pathname.length)) {
			let pathArr = pathname.split('/');
			if(type !== 'sub') return [pathArr[1]];
			if(type === 'sub') {
				pathArr.shift();
				pathArr.shift();
				pathArr.pop();
				return pathArr;
			}
			
		}
	}

	_onOpenChange(openKeys) {
		const that = this;
	    const latestOpenKey = openKeys.find(function(key) {
	    	return that.state.subOpenKeys.indexOf(key) === -1
	    });
	   
	    if (that.state.rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
	      	that.setState({ subOpenKeys: openKeys });
	    } else {
		    that.setState({
		        subOpenKeys: latestOpenKey ? [latestOpenKey] : [],
		    });
	    }
	}

	render() {
		let defaultSubSelectedKeys = ['user', 'organization', '/memberCenter/user/organization/staff'];
		let defaultSelectedKeys = ['memberCenter'];
		//刷新浏览器时，获取currentHeaderMenu
		let currentHeaderMenu = ['memberCenter'];
		let pathname = location.pathname;
		if(pathname.substring(1, pathname.length)) {
			let pathArr = pathname.split('/');
			currentHeaderMenu = pathArr[1];
			defaultSelectedKeys = [pathArr[1]];
			pathArr.shift();
			pathArr.shift();
			pathArr.pop();
			pathArr.push(pathname);
			defaultSubSelectedKeys = pathArr;
		}
		
		return (
			<Layout className="container">
				<Header className="header">
					<div className="logo" />
					<Menu
				        theme="dark"
				        mode="horizontal"
				        defaultSelectedKeys={defaultSelectedKeys}
				        onClick={this._headerMenuClickHandle.bind(this, menus)}
				        style={{ lineHeight: '64px' }}
				    >
				        {this._getHeaderMenus(menus)}
				    </Menu>
				</Header>
				<Layout>
					<Sider
						trigger={null}
						collapsible
						style={{background: '#fff'}}
					>
						<Menu
							theme="light"
							mode='inline'
							selectedKeys={defaultSubSelectedKeys}
							openKeys={this.state.subOpenKeys}
							onOpenChange={this._onOpenChange}
						>
							{this._getMenus(menus, currentHeaderMenu)}
						</Menu>
					</Sider>
					<Layout>
						<Contents />
					</Layout>
				</Layout>
			</Layout>	
		);
	}
}

export default Home;