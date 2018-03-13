import storeFactory from '../../../client/store.js';
import { deselectEvent } from '../../../client/creators.js';

describe('deselectEvent - no event selected', () => {
	// Set up
	const eventSelected = null;
	const store = storeFactory({eventSelected});

	// Do test
	store.dispatch(deselectEvent());

	// Assertions
	it('should set eventSelected to null', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});

describe('deselectEvent - event selected', () => {
	// Set up
	const eventSelected = {not: 'null',};
	const store = storeFactory({eventSelected});

	// Do test
	store.dispatch(deselectEvent());

	// Assertions
	it('should set eventSelected to null', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});