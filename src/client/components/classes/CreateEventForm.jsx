import {Component} from 'react';

// Components
import EventInputs from '../ui/EventInputs.jsx';

class CreateEventForm extends Component {
	constructor(props, context){
		super(props, context);
		this.submit = this.submit.bind(this);
		this.change = this.change.bind(this);
		this.getResetStateObject = this.getResetStateObject.bind(this);

		this.state = this.getResetStateObject();
	}

	change(e){
		// console.log('change - Create');
		const target 	= e.target;
		const name		= target.name;
		const value		= target.value;

		this.setState({
			[name] : value
		});
	}

	submit(e){
		e.preventDefault();
		const { location, time, transportType } = this.state;
		this.props.submitFn(location, time, transportType);
		this.setState(this.getResetStateObject);
	}

	getResetStateObject(){
		return {
			location		: '',
			time 			: '',
			transportType 	: this.props.transportTypes[0].id,
		};
	}

	componentWillReceiveProps(nextProps){
		// console.log('componentWillReceiveProps - create');
		// console.log(nextProps);
		this.setState(this.getResetStateObject());
	}
 
	render(){
		const transportTypes = this.props.transportTypes;
		return(
			<form onSubmit={this.submit}  ref="form">
				<EventInputs transportTypes={transportTypes} change={this.change} {...this.state} />
				<button>Add event</button>
			</form>
		);
	}
}

export default CreateEventForm;