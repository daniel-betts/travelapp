const EventDetail = ({
	location, 
	time, 
	transportType='Undefined',
	history
}) => (
		<div onClick={() => history.goBack()}>
			<h2>{location}</h2>
			<h3>{time} by {transportType}</h3>
		</div>
);


export default EventDetail 