// Components
import Event from './Event.jsx';

const EventList = ({events, transportTypes, deleteFn, selectFn}) => (
	<div>
		{ events.map((event, i) => (
			<Event 	key={i} {...event} 
					transportType={transportTypes.filter(e=> e.id === event.transportType)[0].label}
					deleteFn={() => deleteFn(event.id)}
					selectFn={() => selectFn(event)} />
		))}
	</div>
);

export default EventList; 