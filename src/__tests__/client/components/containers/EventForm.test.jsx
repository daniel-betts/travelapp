import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import EventForm from '../../../../client/components/containers/EventForm.jsx';

import _store from '../../../storeMock';
import _storeWithSelected from '../../../storeWithSelectedMock';

jest.mock('../../../../client/components/classes/EventFormWrapper.jsx');

describe('EventForm container', () => {
	let wrapper;

	beforeAll(() => wrapper = mount(
		<Provider store={_store}>
			<EventForm />
		</Provider>
	));

	afterEach(() => jest.resetAllMocks());

	it('receives transportTypes', () => {
		expect(wrapper.find('EventFormWrapperMock')
			.props()
			.transportTypes).toEqual(_testTransportTypes);
	});

	it('receives eventSelected as null', () => {
		expect(wrapper.find('EventFormWrapperMock')
			.props()
			.eventSelected).toBeNull();
	});

	it('dispatches create event', () => {
		const location 		= 'location';
		const time 			= '2020-01-31T22:30';
		const transportType = '1';

		wrapper.find('EventFormWrapperMock')
			.props()
			.createFn(location, time, transportType);

		expect(_store.dispatch.mock.calls[0][0]).toEqual(
			expect.objectContaining({
				type 			: 'CREATE_EVENT',
				id				: expect.any(String),
				location		: location,
				time			: time,
				transportType 	: parseInt(transportType)
			})
		);
	});

	it('dispatches update event', () => {
		const id 			= 'id';
		const location 		= 'location';
		const time 			= '2020-01-31T22:30';
		const transportType = '1';

		wrapper.find('EventFormWrapperMock')
			.props()
			.updateFn(id, location, time, transportType);

		expect(_store.dispatch.mock.calls[0][0]).toEqual(
			{
				type 			: 'UPDATE_EVENT',
				id				: id,
				location		: location,
				time			: time,
				transportType 	: parseInt(transportType)
			}
		);
	});

	it('dispatches deselect event', () => {
		wrapper.find('EventFormWrapperMock')
			.props()
			.clearFn();

		expect(_store.dispatch.mock.calls[0][0]).toEqual(
			{
				type : 'DESELECT_EVENT'
			}
		);
	});
});

describe('EventForm container 2', () => {

	let wrapperSel = mount(
		<Provider store={_storeWithSelected}>
			<EventForm />
		</Provider>
	);

	it('receives eventSelected object when eventSelecteId is valid event', () => {
		
		expect(wrapperSel.find('EventFormWrapperMock')
			.props()
			.eventSelected).not.toBeNull();
	});

});