import React from 'react';
import { BarLoader } from 'react-spinners';

class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			width: 1000,
			height: 50
		};
	}

	render() {
		return (
			<div className="loader">
				<BarLoader
					loading={this.state.loading}
					width={this.state.width}
					height={this.state.height}
				/>
			</div>
		);
	}
}

export default Loader;
