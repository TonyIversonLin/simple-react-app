import React, {ProTypes} from 'react';

class LoadingDots extends React.component {
	constructor(props, context) {
		super(props, context);
		this.state = {frame: 1};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				frame: this.state.frame + 1
			});
		}, this.props.interval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		let dots = this.state.frame % (this.props.dots +1);
		let text = '';
		while (dots > 0) {
			text += '.';
			dots--;
		}
		return <span {...this.props}>{text}&nbsp;</span>;
	}
}

LoadingDots.defaultProps = {
	interval: 300, dots: 3
};

LoadingDots.propTypes = {
	interval: ProTypes.number,
	dots: ProTypes.number
};

export default LoadingDots;