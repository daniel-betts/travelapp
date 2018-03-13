import { shallow } from 'enzyme';
import Event from '../../../../client/components/ui/Event.jsx';

describe('<Event /> UI component - no functions given', () => {
	// Set up
	const mockProps = Object.assign({}, _testEvents[0], {
		transportType : 'Transport'
	});
	

	// Do test
	const result = shallow(<Event {...mockProps} />);

	// Assertions
	it('should have an id', () => {
		expect(result.props().id).toEqual(expect.stringContaining(mockProps.id));
	});

	it('should have the location displayed', () => {
		expect(result.find('.eventLocation').text()).toEqual(mockProps.location);
	});

	it('should have the time displayed', () => {
		expect(result.find('.eventTime').text()).toEqual(mockProps.time);
	});

	it('should have the transportType displayed', () => {
		expect(result.find('.eventTransportType').text()).toEqual(mockProps.transportType);
	});

	it('should have zero buttons', () => {
		expect(result.find('button').length).toEqual(0);
	});
});

describe('<Event /> UI component - deleteFn given', () => {
	// Set up
	const mockProps = _testEvents[0];

	const mockDeleteFn = jest.fn();

	// Do test
	const result = shallow(<Event {...mockProps} deleteFn={mockDeleteFn} />);

	// Assertions
	it('should have one button', () => {
		expect(result.find('button').length).toEqual(1);
	});

	it('should call deleteFn when button is clicked', () => {
		result.find('button').simulate('click');
		expect(mockDeleteFn).toBeCalled();
	});
});

describe('<Event /> UI component - selectFn given', () => {
	// Set up
	const mockProps = _testEvents[0];

	const mockSelectFn = jest.fn();

	// Do test
	const result = shallow(<Event {...mockProps} selectFn={mockSelectFn} />);

	// Assertions
	it('should have one button', () => {
		expect(result.find('button').length).toEqual(1);
	});

	it('should call updateFn when button is clicked', () => {
		result.find('button').simulate('click');
		expect(mockSelectFn).toBeCalled();
	});
});

describe('<Event /> UI component - updateFn and deleteFn given', () => {
	// Set up
	const mockProps = _testEvents[0];

	const mockSelectFn = jest.fn();
	const mockDeleteFn = jest.fn();

	// Do test
	const result = shallow(<Event {...mockProps} deleteFn={mockDeleteFn} selectFn={mockSelectFn} />);

	// Assertions
	it('should have two buttons', () => {
		expect(result.find('button').length).toEqual(2);
	});
});







