// import {Component} from 'react';

// class EventInputs extends Component {
// 	constructor(props){
// 		super(props);

// 	}

// 	render(){
// 		// console.log('EventInputs render');
// 		// console.log(this.props);
// 		const {transportTypes, location, time, transportType} = this.props;
// 		return (
// 			<div>
// 				<input 	type="text"  
// 						name="location" 
// 						placeholder="Where to?"
// 						value={location} />
// 				<input 	type="datetime-local" 
// 						name="time"
// 						value={time} />
// 				<select name="transportType"
// 						value={transportType} >
// 					{transportTypes.map((type, i) => 
// 						<option key={i} value={type.id}>{type.label}</option>
// 					)}
// 				</select>
// 			</div>
// 		);
// 	}
// }

const EventInputs = ({transportTypes, location, time, transportType, change=f=>f} ) =>
	<div>
		<input 	type="text"  
				name="location" 
				placeholder="Where to?"
				value={location}
				onChange={change} />
		<input 	type="datetime-local" 
				name="time"
				value={time}
				onChange={change} />
		<select name="transportType"
				value={transportType}
				onChange={change} >
			{transportTypes.map((type, i) => 
				<option key={i} value={type.id}>{type.label}</option>
			)}
		</select>
	</div>

export default EventInputs