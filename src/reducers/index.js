import { combineReducers } from 'redux';
import { TOGGLE_MUSIC, LIST_MUSIC } from './../action';

function toggle(state = [], action) {
	switch (action.type) {
		case TOGGLE_MUSIC :
			return action;
		default: return state;
	}
}

function list(state = [], action) {
	switch (action.type) {
		case LIST_MUSIC :
			return action.text;
		default: return state;
	}
}

export default combineReducers({ toggle, list });