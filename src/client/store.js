import { 
	createStore, 
	combineReducers,
	applyMiddleware } from 'redux';
import { events, eventSelected, sortedBy, transportTypes } from './reducers';
import stateData from './state';

// const storageKey = 'travel-app-redux-store';

const logger = store => next => action => {
	console.groupCollapsed('dispatching', action.type);
	console.log('prev state', store.getState());
	console.log('action', action);
	next(action);
	console.log('next state', store.getState());
	console.groupEnd();
};

const saver = store => next => action => {
	let result = next(action);
	// localStorage[storageKey] = JSON.stringify(store.getState());
	return result;
};

const storeFactory = (initialState = stateData) => 
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({ events, eventSelected, sortedBy, transportTypes }), 
		// (localStorage[storageKey])
		// 	? JSON.parse(localStorage[storageKey])
		// 	: initialState
		initialState
	);

export default storeFactory;