import { Route, Switch } from 'react-router-dom';

import EventView from './containers/EventView.jsx';
import Intro from './containers/Intro.jsx';
import EventForm from './containers/EventForm.jsx';
import Events from './containers/Events.jsx';

const App = () => (
	<Switch>
		<Route exact path="/:id" component={EventView} />
		<Route path="/" component={ () => (
			<div className="travelApp">
				<Intro />
				<EventForm  />
				<Events  />
			</div>
		)}/>
	</Switch>
);

export default App;