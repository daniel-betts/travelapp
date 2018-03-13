import Intro from './containers/Intro.jsx';
import EventForm from './containers/EventForm.jsx';
import Events from './containers/Events.jsx';

const App = () => (
	<div className="travelApp">
		<Intro />
		<EventForm  />
		<Events  />
	</div>
);

export default App;