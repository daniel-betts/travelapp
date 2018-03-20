/**
	This file is in the 'classes' folder because it contains the 'pseudo-switch' statment.
	Once the 'CreateEventForm' and the 'UpdateEventForm' files are merged into one this 
	file will be needed in the 'EventForm' container.
*/

import UpdateEventForm from './UpdateEventForm.jsx';
import CreateEventForm from './CreateEventForm.jsx';

const EventFormWrapper = ({eventSelected, transportTypes, createFn, updateFn, clearFn}) => (
	<div>
		{ 
			eventSelected && eventSelected !== null 
				? <UpdateEventForm 
						eventSelected={eventSelected}
						transportTypes={transportTypes}
						submitFn={updateFn}
						clearFn={clearFn} />
				: <CreateEventForm
						transportTypes={transportTypes}
						submitFn={createFn} />
		}
	</div>
);

export default EventFormWrapper;