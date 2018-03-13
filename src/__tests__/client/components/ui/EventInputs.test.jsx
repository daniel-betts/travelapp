import { shallow } from 'enzyme';
import EventInputs from '../../../../client/components/ui/EventInputs.jsx';

describe('<EventInputs /> UI component - input values given', () => {
	// Set up
	const mockTransportTypes = _testTransportTypes;

	const mockProps = {
		location		: 'mockLocation',
		time 			: '2020-10-10T10:10',
		transportType 	: 1
	};

	// Do test
	const result = shallow(<EventInputs {...mockProps} transportTypes={mockTransportTypes} />);

	// Assertions
	it('should set the location value from props.', () => {
		expect(result.find('input[type="text"]').props().value).toEqual(mockProps.location);
	});

	it('should set the time value from props.', () => {
		expect(result.find('input[type="datetime-local"]').props().value).toEqual(mockProps.time);
	});

	it('should have one <option> per mockTransportTypes.', () => {
		expect(result.find('option').length).toEqual(mockTransportTypes.length);
	});

	it('should have the transportType value from props.', () => {
		expect(parseInt(result.find('select').props().value)).toEqual(mockProps.transportType);
	});
});

describe('<EventInputs /> UI component - no input values given', () => {
	// Set up
	const mockTransportTypes = _testTransportTypes;

	// Do test
	const result = shallow(<EventInputs transportTypes={mockTransportTypes} />);

	// Assertions
	it('should set the location value from props.', () => {
		expect(result.find('input[type="text"]').props().value).not.toBeDefined();
	});

	it('should set the time value from props.', () => {
		expect(result.find('input[type="datetime-local"]').props().value).not.toBeDefined();
	});

	it('should have the transportType value from props.', () => {
		expect(result.find('select').props().value).not.toBeDefined();
	});
});

describe('<EventInputs /> UI component - changeFn given', () => {
	// Set up
	const mockTransportTypes = _testTransportTypes;

	const mockChangeFn = jest.fn();

	// Do test
	const result = shallow(<EventInputs change={mockChangeFn} transportTypes={mockTransportTypes} />);

	// Assertions
	it('should call changeFn on text input change', () => {
		result.find('input[type="text"]').simulate('change');
		expect(mockChangeFn).toBeCalled();
	});

	it('should call changeFn on datetime-local input change', () => {
		result.find('input[type="datetime-local"]').simulate('change');
		expect(mockChangeFn).toBeCalled();
	});

	it('should call changeFn on transportType select change', () => {
		result.find('select').simulate('change');
		expect(mockChangeFn).toBeCalled();
	});
});

