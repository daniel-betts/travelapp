import C from '../../../client/constants.js';
import { event } from '../../../client/reducers.js';
import deepFreeze from 'deep-freeze';

describe('event Reducer', () => {
	const testEvent = {
		id				: 'id', 
		location		: 'Bahamas',
		time			: '2017-11-04T19:40', 
		transportType	: 1
	};

	it('CREATE EVENT success', () => {
		const state = {};
		const action = Object.assign({}, testEvent, {
			type			: C.CREATE_EVENT
		});
		
		deepFreeze(state);
		deepFreeze(action);
		
		const result = event(state, action);
		expect(result)
			.toEqual({
				id				: 'id', 
				location		: 'Bahamas',
				time			: '2017-11-04T19:40', 
				transportType	: 1
			});
	});

	it('UPDATE EVENT success', () => {
		const state = {
			id				: 'id', 
			location		: 'Bahamas_old',
			time			: '2017-11-04T19:40', 
			transportType	: 0
		};
		const action = Object.assign({}, testEvent, {
			type			: C.UPDATE_EVENT
		});

		deepFreeze(state);
		deepFreeze(action);
		
		const result = event(state, action);
		expect(result)
			.toEqual({
				id				: 'id', 
				location		: 'Bahamas',
				time			: '2017-11-04T19:40', 
				transportType	: 1
			});
	});

	it('UPDATE EVENT different id', () => {
		const state = {
			id				: 'id', 
			location		: 'Bahamas_old',
			time			: '2017-11-04T19:40', 
			transportType	: 0
		};
		const action = Object.assign({}, testEvent, {
			type			: C.UPDATE_EVENT,
			id				: 'id_new', 
		});

		deepFreeze(state);
		deepFreeze(action);

		const result = event(state, action);
		expect(result)
			.toEqual(state);
	});

	it('Not defined event', () => {
		const state = {
			prop 	: 'value' 
		};

		const action = {
			type 	: 'NOT_DEFINED'
		};

		deepFreeze(state);
		deepFreeze(action);

		const result = event(state, action);

		expect(result).toEqual(state);

	});
});