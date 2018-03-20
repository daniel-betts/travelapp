import storeFactory from '../../../client/store.js';
import { selectEvent } from '../../../client/creators.js';


describe('selectEvent - event given', () => {
	// Set up
	const eventSelectedId = null;

	const store = storeFactory({eventSelectedId});

	const eventToSelect = {
		id : '00002'
	};
	
	// Do test
	store.dispatch(selectEvent(eventToSelect)); 

	// Assertions
	it('should set selectedEvent to dispatched event.', () => {
		expect(store.getState().eventSelectedId).toEqual(eventToSelect);
	});
});

describe('selectEvent - null event given', () => {
	// Set up
	const eventSelectedId = null;

	const store = storeFactory({eventSelectedId});

	const eventToSelect = null;

	// Do test
	store.dispatch(selectEvent(eventToSelect)); 

	// Assertions
	it('should set selectedEvent to null.', () => {
		expect(store.getState().eventSelectedId).toBeNull();
	});
});

describe('selectEvent - no event given', () => {
	// Set up
	const eventSelectedId = null;

	const store = storeFactory({eventSelectedId});

	// Do test
	store.dispatch(selectEvent()); 

	// Assertions
	it('should set selectedEvent to null.', () => {
		expect(store.getState().eventSelectedId).toBeNull();
	});
});