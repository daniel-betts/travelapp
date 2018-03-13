import C from './constants';
import {v4} from 'uuid';

export const createEvent = (location, time, transportType) => ({
	type 			: C.CREATE_EVENT,
	id				: v4(),
	location,
	time,
	transportType	: parseInt(transportType)
});


export const selectEvent = (event) => ({
	type 			: C.SELECT_EVENT,
	event			: (event ? event : null),
});


export const deselectEvent = () => ({
	type			: C.DESELECT_EVENT,
});


export const updateEvent = (id, location, time, transportType) => ({
	type 			: C.UPDATE_EVENT,
	id,
	location,
	time,
	transportType	: parseInt(transportType)
});


export const deleteEvent = (id) => ({
	type 	: C.DELETE_EVENT,
	id
});


export const sortBy = (sortBy) => ({
	type 	: C.SORT_EVENTS,
	sortBy
});



