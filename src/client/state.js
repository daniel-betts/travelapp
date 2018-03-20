import transportTypes from './data/transportTypes';

const stateData = {	
	events : [
		{
			id: '00001', 
			location: 'Haneda Airport - Tokyo, Japan', 
			time: '2017-11-04T19:40', 
			transportType: 1
		},
		{
			id: '00002', 
			location: 'Moa Hostel - Tokyo, Japan', 
			time: '2017-11-04T22:30', 
			transportType: 2
		}
	],
	eventSelectedId : null,
	sortedBy: 'SORT_BY_TIME',
	transportTypes
};

export default stateData;