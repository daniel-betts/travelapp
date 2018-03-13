// React Redux
import { connect } from 'react-redux';

// Redux
import { deleteEvent, selectEvent } from '../../creators';

// Components
import EventList from '../ui/EventList.jsx';

const mapStateToProps = state =>
	({
		events 			: state.events,
		transportTypes	: state.transportTypes
	});

const mapDispatchToProps = dispatch =>
	({
		deleteFn(id) {
			dispatch(deleteEvent(id));
		},
		selectFn(id) {
			dispatch(selectEvent(id));
		}
	});

const Events = connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList);

export default Events;
