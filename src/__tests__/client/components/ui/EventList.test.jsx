import { mount } from 'enzyme';
import EventList from '../../../../client/components/ui/EventList.jsx';

jest.mock('../../../../client/components/ui/Event.jsx');

describe('<EventList /> UI component', () => {
	// Set up
	const _deleteFn = jest.fn();
	const _selectFn = jest.fn();

	const mockProps = {
		events 			: _testEvents,
		transportTypes 	: _testTransportTypes,
		deleteFn		: _deleteFn,
		selectFn		: _selectFn
	} 

	// Do test
	const result = mount(<EventList {...mockProps} />);

	// Assertions
	it('should have correct number of Events', () => {
		expect(result.find('EventMock').length).toBe(_testEvents.length);
	});

	it('invokes deleteFn handler', () => {
		result.find('EventMock')
			.first()
			.find('.deleteFn')
			.simulate('click');
		expect(_deleteFn).toBeCalledWith(_testEvents[0].id);
	});

	it('invokes selectFn handler', () => {
		result.find('EventMock')
			.first()
			.find('.selectFn')
			.simulate('click');
		expect(_selectFn).toBeCalledWith(_testEvents[0].id);
	});


});