import C from '../../../client/constants';
import { eventSelectedId } from '../../../client/reducers';
import deepFreeze from 'deep-freeze';

describe('eventSelectedId Reducer', () => {
	const defaultState = 'id';

	it('SELECT_EVENT success', () => {
		const targetEventId = 'id_selected';

		const state = defaultState;

		const action = {
			type 			: C.SELECT_EVENT,
			id 				: targetEventId
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelectedId(state, action);
		expect(result).toEqual(targetEventId);
	});

	it('DELETE_EVENT different id', () => {
		const state = defaultState;

		const action = {
			type 			: C.DELETE_EVENT,
			id 				: 'different_id'
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelectedId(state, action);
		expect(result).toEqual(state);
	});

	it('DELETE_EVENT same id', () => {
		const state = defaultState;

		const action = {
			type 			: C.DELETE_EVENT,
			id 				: defaultState
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelectedId(state, action);
		expect(result).toBeNull();
	});

	it('DESELECT_EVENT success', () => {
		const state = defaultState;

		const action = {
			type 			: C.DESELECT_EVENT
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelectedId(state, action);
		expect(result).toBeNull();
	});

	it('UPDATE_EVENT success', () => {
		const state = defaultState;

		const action = {
			type 			: C.UPDATE_EVENT
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelectedId(state, action);
		expect(result).toBeNull();
	});

	it('Not defined action type', () => {
		const state = defaultState;

		const action = {
			type 			: 'NOT_DEFINED'
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = eventSelectedId(state, action);
		expect(result).toEqual(state);
	});

});