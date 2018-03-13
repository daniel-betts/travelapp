import storeFactory from '../../../client/store.js';
import { createEvent } from '../../../client/creators.js';

describe('createEvent', () => {
	let store;
	const events = [
		{
			id: '00001', 
			location: 'Haneda Airport - Tokyo, Japan', 
			time: '2017-11-04T19:40', 
			transportType: 1
		},
		{
			id: '00002', 
			location: 'Moa Hostel - Tokyo, Japan', 
			time: '2017-11-04T22:30', 
			transportType: 2
		}
	];

	const location		= 'Bahamas';
	const time			= '2017-11-04T19:40';
	const transportType	= '1';

	const getCreatedEvent = (eventsState) => {
		return eventsState.find((es) => {
			return events.every((ie) => ie.id !== es.id);
		});
	};

	beforeAll(() => {
		store = storeFactory({events});
		store.dispatch(createEvent(location, time, transportType)); 
	});

	it('should add new event', () => 
		expect(store.getState().events.length).toBe(events.length + 1));

	it('should add id to new event', () => {
		const createdEvent = getCreatedEvent(store.getState().events);
		expect(createdEvent.id).not.toBeNull();
	});

	it('should have parsed transportType to int', () => {
		const createdEvent = getCreatedEvent(store.getState().events);
		expect(createdEvent.transportType).toEqual(parseInt(transportType));
	});
});