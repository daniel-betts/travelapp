const _store = {
	dispatch	: jest.fn(),
	subscribe	: jest.fn(),
	getState	: jest.fn(() => 
		({
			events 			: _testEvents,	
			transportTypes 	: _testTransportTypes,
			eventSelected 	: null
		})
	)
};

export default _store;