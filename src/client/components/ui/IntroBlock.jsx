const IntroBlock = ({title, paragraph}) => {
	return (
		<div className="introBlock">
			<h1>{title}</h1>
			<p>{paragraph}</p>
		</div>
	);
}

export default IntroBlock;