// React Redux
import { connect } from 'react-redux';

// Components
import IntroBlock from '../ui/IntroBlock.jsx';

const mapStateToProps = state => 
	({
		title			: 'Travel App',
		paragraph		: `${state.events.length} events created.`,
	});

const mapDispatchToProps = null;

const Intro = connect(
	mapStateToProps,
	mapDispatchToProps
)(IntroBlock);

export default Intro;