import {withRouter} from 'react-router-dom';

// Components
import Event from './Event.jsx';

const EventList = ({events, transportTypes, deleteFn, selectFn, history}) => (
	<div>
		{ events.map((event, i) => (
			<Event 	key={i} {...event} 
					transportType={transportTypes.filter(e=> e.id === event.transportType)[0].label}
					deleteFn={() => deleteFn(event.id)}
					selectFn={() => selectFn(event.id)}
					detailFn={() => history.push(`/${event.id}`)} />
		))}
	</div>
);

export default withRouter(EventList); 