import storeFactory from '../../../client/store.js';
import { updateEvent } from '../../../client/creators.js';

const eventSelected = {
	id: '00002', 
	location: 'Moa Hostel - Tokyo, Japan', 
	time: '2017-11-04T22:30', 
	transportType: 2
};

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

const newLocation = 'new location';
const newTime = '2020-03-04T02:55';
const newTransportType = '34';

describe('updateEvent - valid event given', () => {
	// Set up
	const store = storeFactory({events, eventSelected});

	const id = eventSelected.id;

	// Do test
	store.dispatch(updateEvent(id, newLocation, newTime, newTransportType));

	// Assertions
	it('should maintain events length', () => {
		expect(store.getState().events.length).toEqual(events.length);
	});

	it('should update correct event', () => {
		const updatedEvent = store.getState().events.find((e) => e.id === id);
		expect(updatedEvent.location).toEqual(newLocation);
		expect(updatedEvent.time).toEqual(newTime);
		expect(updatedEvent.transportType).toEqual(parseInt(newTransportType));
	});

	it('should set eventSelected state to null', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});

describe('updateEvent - invalid event given', () => {
	// Set up
	const store = storeFactory({events, eventSelected});

	const id = 'invalid id';

	// Do test
	store.dispatch(updateEvent(id, newLocation, newTime, newTransportType));

	// Assertions
	it('should not change events state.', () => {
		expect(store.getState().events).toEqual(events);
	});

	it('should set eventSelected state to null', () => {
		expect(store.getState().eventSelected).toBeNull();
	});
});

