import C from '../../../client/constants';
import { sortedBy } from '../../../client/reducers';
import deepFreeze from 'deep-freeze';

describe('sort Reducer', () => {
	const initialState = 'SORT_BY_TIME';

	it('SORT_EVENTS success', () => {
		const state = '' + initialState;

		const sortBy = 'new_sort';

		const action = {
			type 			: C.SORT_EVENTS,
			sortBy 
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = sortedBy(state, action);
		expect(result).toEqual(sortBy);
	});

	it('Not defined action type', () => {
		const state = '' + initialState;

		const action = {
			type 			: 'NOT_DEFINED'
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = sortedBy(state, action);
		expect(result).toEqual(state);
	});
});