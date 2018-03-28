const Event = (
	{ // 'props' object
		id, 
		location, 
		time, 
		transportType='Undefined',
		deleteFn=null,
		selectFn=null,
		detailFn=null
	}) => (
	<div id={'event_id_' + id}  >
		<em className="eventLocation" onClick={detailFn}>{location}</em>
		<span className="eventTime">{time}</span>
		<span className="eventTransportType">{transportType}</span>
		{deleteFn !== null ?
			<button onClick={deleteFn}>(X)</button> : ''
		}
		{selectFn !== null ?
			<button onClick={selectFn}>Update</button> : ''
		}
	</div>
);

export default Event;