import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Events from '../../../../client/components/containers/Events.jsx';

import _store from '../../../storeMock';

jest.mock('../../../../client/components/ui/EventList.jsx');

describe('Events container', () => {
	let wrapper;

	beforeAll(() => wrapper = mount(
		<Provider store={_store}>
			<Events />
		</Provider>
	));

	it('renders correct number of events', () => {
		expect(wrapper.find('EventListMock')
			.props()
			.events
			.length).toBe(_testEvents.length);
	});

	it('receives transportTypes', () => {
		expect(wrapper.find('EventListMock')
			.props()
			.transportTypes).toEqual(_testTransportTypes);
	});

	afterEach(() => jest.resetAllMocks());

	it('dispatches delete event', () => {
		wrapper.find('EventListMock')
			.props()
			.deleteFn('id');

		expect(_store.dispatch.mock.calls[0][0]).toEqual({
			type		: 'DELETE_EVENT',
			id			: 'id'
		});
	});

	it('dispatches select event', () => {
		wrapper.find('EventListMock')
			.props()
			.selectFn('id');

		expect(_store.dispatch.mock.calls[0][0]).toEqual({
			type		: 'SELECT_EVENT',
			id			: 'id'
		});
	});

});