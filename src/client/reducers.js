import C from './constants';

export const event = (state={}, action) =>{
	switch(action.type){
		case C.CREATE_EVENT :
			return {
				id				: action.id, 
				location		: action.location, 
				time			: action.time, 
				transportType	: action.transportType
			};
		case C.UPDATE_EVENT :
			return state.id !== action.id 
				? state
				: {
					id				: action.id, 
					location		: action.location, 
					time			: action.time, 
					transportType	: action.transportType
				};
		default :
			return state;
	}
};

export const events = (state=[], action) => {
	switch(action.type) {
		case C.CREATE_EVENT :
			return [
				...state,
				event({}, action)
			];
		case C.UPDATE_EVENT : 
			return state.map(e => event(e, action));
		case C.DELETE_EVENT : 
			return state.filter(e => e.id !== action.id);
		default:
			return state;
	}
};

export const eventSelected = (state = null, action) => {
	switch(action.type) {
		case C.SELECT_EVENT :
			return action.event;
		case C.DESELECT_EVENT :
		case C.UPDATE_EVENT :
			return null;
		case C.DELETE_EVENT:
			return state === null || action.id === state.id ? null : state;
		default :
			return state;
	}
};

export const sortedBy = (state='SORT_BY_TIME', action) => {
	switch(action.type){
		case C.SORT_EVENTS :
			return action.sortBy;
		default:
			return state;
	}
};

export const transportTypes = (state=[]) => {
	return state;
};