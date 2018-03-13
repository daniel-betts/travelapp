const EventMock = ({deleteFn=f=>f,selectFn=f=>f}) => (
	<div className="event">
		<button className="deleteFn" onClick={deleteFn}></button>
		<button className="selectFn" onClick={selectFn}></button>
	</div>
);

EventMock.displayName = "EventMock";

export default EventMock;
