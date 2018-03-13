import storeFactory from '../../../client/store.js';
import { deleteEvent } from '../../../client/creators.js';

const eventSelected = {
	id: '00002', 
	location: 'Moa Hostel - Tokyo, Japan', 
	time: '2017-11-04T22:30', 
	transportType: 2
};

const events = [
	{
		id: '00001', 
		location: 'Haneda Airport - Tokyo, Japan', 
		time: '2017-11-04T19:40', 
		transportType: 1
	},
	{
		id: '00002', 
		location: 'Moa Hostel - Tokyo, Japan', 
		time: '2017-11-04T22:30', 
		transportType: 2
	}
];

describe('delete event - eventSelected id given', () => {
	// Set up
	const store = storeFactory({events, eventSelected});

	const id = eventSelected.id;

	// Do test
	store.dispatch(deleteEvent(id));

	// Assertions
	it('should remove event from events', () => {
		expect(store.getState().events.length).toEqual(events.length - 1);
		expect(store.getState().events.some((e) => e.id === id)).toEqual(false);
	});

	it('should set eventSelected to null', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});

describe('delete event - invalid id given', () => {
	// Set up
	const store = storeFactory({events, eventSelected});

	const id = 'invalid';

	// Do test
	store.dispatch(deleteEvent(id));

	// Assertions
	it('should not change events state', () => {
		expect(store.getState().events).toEqual(events);
	});

	it('should not change eventSelected state', () => {
		expect(store.getState().eventSelected).toEqual(eventSelected);
	});
});

describe('delete event - valid id given different from eventSelected id', () => {
	// Set up
	const store = storeFactory({events, eventSelected});

	const id = events[0].id;

	// Do test
	store.dispatch(deleteEvent(id));

	// Assertions
	it('should remove event from events', () => {
		expect(store.getState().events.length).toEqual(events.length - 1);
		expect(store.getState().events.some((e) => e.id === id)).toEqual(false);
	});

	it('should not change eventSelected state', () => {
		expect(store.getState().eventSelected).toEqual(eventSelected);
	});
});