import storeFactory from '../../../client/store.js';
import { sortBy } from '../../../client/creators.js';

const sortedBy = 'SORT_BY_INITIAL';

describe('sortBy event - non undefined value given', () => {
	// Set up
	const store = storeFactory({sortedBy});

	const newSortedBy = 'new sort value';
	
	// Do test
	store.dispatch(sortBy(newSortedBy));

	it('should change sortBy to new value', () => {
		expect(store.getState().sortedBy).toEqual(newSortedBy);
	});

});