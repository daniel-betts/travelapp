import { shallow } from 'enzyme';
import IntroBlock from '../../../../client/components/ui/IntroBlock.jsx';

describe('<IntroBlock /> UI component - no functions given', () => {
	// Set up
	const mockProps = {
		title		: 'Mock title',
		paragraph	: 'Mocl paragraph'
	}

	// Do test
	const result = shallow(<IntroBlock {...mockProps} />);

	// Assertions
	it('should have the given title', () => {
		expect(result.find('h1').text()).toEqual(mockProps.title);
	});

	it('should have the given paragraph', () => {
		expect(result.find('p').text()).toEqual(mockProps.paragraph);
	});
});

