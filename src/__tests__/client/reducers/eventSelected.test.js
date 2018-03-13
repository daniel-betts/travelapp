import C from '../../../client/constants';
import { eventSelected } from '../../../client/reducers';
import deepFreeze from 'deep-freeze';

describe('eventSelected Reducer', () => {
	const defaultState = {
		id				: 'id', 
		location		: 'Bahamas',
		time			: '2017-11-04T19:40', 
		transportType	: 1
	};

	it('SELECT_EVENT success', () => {
		const targetEvent = {
			id				: 'id_selected', 
			location		: 'Italy',
			time			: '2017-09-04T19:40', 
			transportType	: 3
		};

		const state = Object.assign({}, defaultState);

		const action = {
			type 			: C.SELECT_EVENT,
			event 			: targetEvent
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelected(state, action);
		expect(result).toEqual(targetEvent);
	});

	it('DELETE_EVENT different id', () => {
		const state = Object.assign({}, defaultState);

		const action = {
			type 			: C.DELETE_EVENT,
			id 				: 'different_id'
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelected(state, action);
		expect(result).toEqual(state);
	});

	it('DELETE_EVENT same id', () => {
		const state = Object.assign({}, defaultState);

		const action = {
			type 			: C.DELETE_EVENT,
			id 				: defaultState.id
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelected(state, action);
		expect(result).toBeNull();
	});

	it('DESELECT_EVENT success', () => {
		const state = Object.assign({}, defaultState);

		const action = {
			type 			: C.DESELECT_EVENT
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelected(state, action);
		expect(result).toBeNull();
	});

	it('UPDATE_EVENT success', () => {
		const state = Object.assign({}, defaultState);

		const action = {
			type 			: C.UPDATE_EVENT
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelected(state, action);
		expect(result).toBeNull();
	});

	it('Not defined action type', () => {
		const state = Object.assign({}, defaultState);

		const action = {
			type 			: 'NOT_DEFINED'
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelected(state, action);
		expect(result).toEqual(state);
	});

});