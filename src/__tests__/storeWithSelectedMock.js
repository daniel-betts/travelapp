const _storeWithSelected = {
	dispatch	: jest.fn(),
	subscribe	: jest.fn(),
	getState	: jest.fn(() => 
		({
			events 			: _testEvents,	
			transportTypes 	: _testTransportTypes,
			eventSelectedId	: '00001'
		})
	)
};

export default _storeWithSelected;