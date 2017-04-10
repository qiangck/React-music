import { combineReducers } from 'redux';
import { RECEIVE_POSTS } from './../action';

function list(state = [], action) {
	switch (action.type) {
		case RECEIVE_POSTS :
			return action;
		default: return state;
	}
}

export default combineReducers({ list });