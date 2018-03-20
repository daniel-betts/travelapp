import storeFactory from '../../../client/store.js';
import { deselectEvent } from '../../../client/creators.js';

describe('deselectEvent - no event selected', () => {
	// Set up
	const eventSelectedId = null;
	const store = storeFactory({eventSelectedId});

	// Do test
	store.dispatch(deselectEvent());

	// Assertions
	it('should set eventSelectedId to null', () => {
		expect(store.getState().eventSelectedId).toBeNull();
	});
});

describe('deselectEvent - event selected', () => {
	// Set up
	const eventSelectedId = {not: 'null',};
	const store = storeFactory({eventSelectedId});

	// Do test
	store.dispatch(deselectEvent());

	// Assertions
	it('should set eventSelectedId to null', () => {
		expect(store.getState().eventSelectedId).toBeNull();
	});
});