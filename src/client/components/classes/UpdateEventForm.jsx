import {Component} from 'react';

// Redux
import { deselectEvent, updateEvent } from '../../creators';

// Components
import EventInputs from '../ui/EventInputs.jsx';

class UpdateEventForm extends Component {
	constructor(props, context){
		super(props, context);

		this.change = this.change.bind(this);
		this.submit = this.submit.bind(this);

		this.state = this.props.eventSelected
	}

	change(e){
		// console.log('change - Update');
		const target 	= e.target;
		const name		= target.name;
		const value		= target.value;

		this.setState({
			[name] : value
		});
	}

	submit(e){
		e.preventDefault();
		// console.log('submit');
		const {id, location, time, transportType } = this.state;
		this.props.submitFn(id, location, time, transportType);
	}

	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps - Update');
		// console.log(nextProps);
		this.setState(nextProps.eventSelected);
	}

	render(){
		const transportTypes = this.props.transportTypes;
		return(
			<form onSubmit={this.submit}>
				<EventInputs transportTypes={transportTypes} change={this.change} {...this.state} />
				<button type="submit">Update event</button>
				<button type="button" onClick={() => this.props.clearFn()}>(Cancel)</button>
			</form>
		);
	}
}

export default UpdateEventForm;