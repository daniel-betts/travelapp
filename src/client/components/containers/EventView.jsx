// React Redux
import { connect } from 'react-redux';

import EventDetail from '../ui/EventDetail.jsx';


const EventView = connect(
	(state, props) => {
		let event = state.events.find( e => e.id === props.match.params.id);
		if(event) {
			event = Object.assign({}, event, {
				transportType : state.transportTypes.find( t => t.id === event.transportType).label
			});
		}

		return event;
	}
)(EventDetail)

export default EventView;