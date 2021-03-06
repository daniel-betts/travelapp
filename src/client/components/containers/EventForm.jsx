// React Redux
import { connect } from 'react-redux';

// Redux
import { createEvent, deselectEvent, updateEvent } from '../../creators';

// Components
// import CreateEventForm 			from '../classes/CreateEventForm.jsx';
// import UpdateEventForm 			from '../classes/UpdateEventForm.jsx';
import EventFormWrapper from '../classes/EventFormWrapper.jsx';

const mapStateToProps = state =>
	({
		eventSelected		: findEvent(state),
		transportTypes 		: state.transportTypes,
	});

const mapDispatchToProps = dispatch =>
	({
		createFn(location, time, transportType) {
			dispatch(createEvent(location, time, transportType));
		},
		updateFn(id, location, time, transportType) {
			dispatch(updateEvent(id, location, time, transportType))
		},
		clearFn() {
			dispatch(deselectEvent());
		}
	});

const findEvent = state => {
	return state.eventSelectedId
		? state.events.find(e => e.id === state.eventSelectedId)
		: null
};

const EventForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventFormWrapper)

export default EventForm;

// const EventFormWrapper = ({eventSelected, transportTypes, createFn, updateFn, clearFn}) => (
// 		<div>
// 			{ 
// 				eventSelected !== null 
// 					? <UpdateEventForm 
// 							eventSelected={eventSelected}
// 							transportTypes={transportTypes}
// 							submitFn={updateFn}
// 							clearFn={clearFn} />
// 					: <CreateEventForm
// 							transportTypes={transportTypes}
// 							submitFn={createFn} />
// 			}
// 		</div>

// 	);

// import {PropTypes} from 'prop-types';

// // Components
// import CreateEventForm 			from './CreateEventForm.jsx';
// import UpdateEventForm 			from './UpdateEventForm.jsx';

// const EventForm = ({}, {store}) => {
// 	const { eventSelected } = store.getState();
// 	console.log('EventForm');
// 	console.log(eventSelected)
// 	return (
// 		<div>
// 			{ 
// 				eventSelected !== null 
// 					? <UpdateEventForm />
// 					: <CreateEventForm />
// 			}
// 		</div>
// 	);
// };

// EventForm.contextTypes = {
// 	store : PropTypes.object
// }

// export default EventForm;