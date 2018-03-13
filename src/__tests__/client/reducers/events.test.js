import C from '../../../client/constants.js';
import { events } from '../../../client/reducers.js';
import deepFreeze from 'deep-freeze';

describe('events reducer', () => {
	const defaultState = [
		{
			id				: 'id_01', 
			location		: 'Bahamas',
			time			: '2017-11-04T19:40', 
			transportType	: 1
		},
		{
			id				: 'id_02', 
			location		: 'Italy',
			time			: '2018-10-04T20:00', 
			transportType	: 1
		}
	];


	it('CREATE EVENT success', () => {
		const state = [...defaultState];
		const newEvent = {
			id 				: 'id_new',
			location 		: 'Napa',
			time			: '2018-01-02T05:00',
			transportType	: 3
		};

		const action = Object.assign({}, newEvent, {
			type 			: C.CREATE_EVENT,
		});

		deepFreeze(state);
		deepFreeze(action);

		const result = events(state, action);

		expect(result.length)
			.toBe(defaultState.length + 1);
		expect(result).toEqual(expect.arrayContaining([newEvent]));
	});


	it('UPDATE EVENT - event not found', () => {
		const state = [...defaultState];
		const newEvent = {
			id 				: 'id_not_found',
			location 		: 'Napa',
			time			: '2018-01-02T05:00',
			transportType	: 3
		};

		const action = Object.assign({}, newEvent, {
			type 			: C.UPDATE_EVENT,
		});

		deepFreeze(state);
		deepFreeze(action);

		const result = events(state, action);
		expect(result.length)
			.toBe(defaultState.length);
		expect(result).toEqual(expect.arrayContaining(state));
	});

	it('UPDATE EVENT - event found', () => {
		const state = [...defaultState];
		const newEvent = {
			id 				: 'id_01',
			location 		: 'Napa',
			time			: '2018-01-02T05:00',
			transportType	: 3
		};

		const action = Object.assign({}, newEvent, {
			type 			: C.UPDATE_EVENT,
		});

		deepFreeze(state);
		deepFreeze(action);

		const result = events(state, action);
		expect(result.length)
			.toBe(defaultState.length);
		expect(result).toEqual(expect.arrayContaining([newEvent]));
	});

	it('DELETE EVENT - event not found', () => {
		const state = [...defaultState];
		const newEvent = {
			id 				: 'id_not_found'
		};

		const action = Object.assign({}, newEvent, {
			type 			: C.DELETE_EVENT,
		});

		deepFreeze(state);
		deepFreeze(action);

		const result = events(state, action);
		expect(result.length)
			.toBe(defaultState.length);
		expect(result).toEqual(expect.arrayContaining(state));
	});

	it('DELETE EVENT - event not found', () => {
		const state = [...defaultState];
		const newEvent = {
			id 				: 'id_01'
		};

		const action = Object.assign({}, newEvent, {
			type 			: C.DELETE_EVENT,
		});

		deepFreeze(state);
		deepFreeze(action);

		const result = events(state, action);
		expect(result.length)
			.toBe(defaultState.length -1);
	});

	it('Not defined action type', () => {
		const state = [...defaultState];

		const action = {
			type 			: 'NOT_DEFINED',
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = events(state, action);
		expect(result).toEqual(state);
	});	
});