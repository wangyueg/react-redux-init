import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Staff from '../memberCenter/user/organization/staff/index';
import One from '../memberCenter/user/rightsmanagement/one/index';
import Sourcepo from '../memberCenter/deliverorders/sourcepo/index';

const { Content } = Layout;

let Contents = () => {
	return (
		<Content>
			<Switch>
				<Route path="/memberCenter/user/rightsmanagement/one" component={One} />
				<Route path="/memberCenter/deliverorders/sourcepo" component={Sourcepo} />
	        	<Route path="/memberCenter/user/organization/staff" component={Staff} />
	        	<Route path="/memberCenter1/user1/rightsmanagement1/one1" component={One} />
				<Route path="/memberCenter1/deliverorders1/sourcepo1" component={Sourcepo} />
	        	<Route path="/memberCenter1/user1/organization1/staff1" component={Staff} />
	        	<Route path="/memberCenter2/user2" component={Staff} />
	        	<Route path="/memberCenter2/user3" component={Staff} />
	        	<Redirect to="/memberCenter/user/organization/staff" />
	        </Switch>
	    </Content>
	);
}

export default Contents;