let initState = {
	username: 'guoyongqi'
}

export default function loginReducer(state=initState, action) {
	switch(action.type) {
		case 'LOGIN':
			return {
				...state,
				username: 'wangyuegyq'
			}

		default:
			return state;
	}
}