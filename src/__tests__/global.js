import React from 'react';
import deepFreeze from 'deep-freeze';

global.React = React;
global._testEvents = deepFreeze([
	{
		id: '00001', 
		location: 'House 0', 
		time: '2020-01-01T09:00', 
		transportType: 0
	},
	{
		id: '00002', 
		location: 'House 1', 
		time: '2020-01-02T10:00', 
		transportType: 1
	},{
		id: '00003', 
		location: 'House 2', 
		time: '2020-01-03T11:00', 
		transportType: 2
	}
]);
global._testTransportTypes = deepFreeze([
	{ id : 0, label	: 'Label 00' },
	{ id : 1, label	: 'Label 01' },
	{ id : 2, label	: 'Label 02' },
]);