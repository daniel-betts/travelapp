import storeFactory from '../../../client/store.js';
import { selectEvent } from '../../../client/creators.js';


describe('selectEvent - event given', () => {
	// Set up
	const eventSelected = null;

	const store = storeFactory({eventSelected});

	const eventToSelect = {
		id: '00002', 
		location: 'Moa Hostel - Tokyo, Japan', 
		time: '2017-11-04T22:30', 
		transportType: 2
	};
	
	// Do test
	store.dispatch(selectEvent(eventToSelect)); 

	// Assertions
	it('should set selectedEvent to dispatched event.', () => {
		expect(store.getState().eventSelected).toEqual(eventToSelect);
	});
});

describe('selectEvent - null event given', () => {
	// Set up
	const eventSelected = null;

	const store = storeFactory({eventSelected});

	const eventToSelect = null;

	// Do test
	store.dispatch(selectEvent(eventToSelect)); 

	// Assertions
	it('should set selectedEvent to null.', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});

describe('selectEvent - no event given', () => {
	// Set up
	const eventSelected = null;

	const store = storeFactory({eventSelected});

	// Do test
	store.dispatch(selectEvent()); 

	// Assertions
	it('should set selectedEvent to null.', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});