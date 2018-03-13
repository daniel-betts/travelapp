import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Intro from '../../../../client/components/containers/Intro.jsx';

import _store from '../../../storeMock';

jest.mock('../../../../client/components/ui/IntroBlock.jsx');

describe('Intro container', () => {
	let wrapper

	beforeAll(() => wrapper = mount(
		<Provider store={_store}>
			<Intro />
		</Provider>
	));

	it('should have a title', () => {
		expect(wrapper.find('IntroBlockMock')
			.props()
			.title).toBeDefined();
	});

	it('should have a paragraph containing the number of events', () => {
		expect(wrapper.find('IntroBlockMock')
			.props()
			.paragraph).toEqual(expect.stringContaining(_testEvents.length.toString()));
	});
});