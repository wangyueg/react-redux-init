import { combineReducers } from 'redux';
import Login from './app/login/index.reducer';
import Fetch from './middleware/fetch/index.reducer';

export default combineReducers({
	Login,
	Fetch
});