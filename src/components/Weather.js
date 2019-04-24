import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions';

class Weather extends React.Component {


	render() {
		const { temperature, adminArea5, adminArea3 } = this.props.weather;
		
		if(!adminArea3) {
			return (				
					<div className="ui raised very padded text container segment">
						<h2 className="ui header">Search a location for cool weather data...</h2>						
					</div>
			)
		} else if (!adminArea5) {
			return (
				<div>
					<div className="ui raised very padded text container segment">
						<h2 className="ui header">Weather for {adminArea3}</h2>
						<p>Temperature: {temperature}F</p>

					</div>
				</div>
			)
		}

		if (this.props.loading) {
			return (
				<div className="ui active centered inline loader white"></div>
			)
		}

		return (
			<div>
				<h1 className="item">
					<div className="ui raised very padded text container segment">
						<h2 className="ui header">Weather for {adminArea5}, {adminArea3}</h2>
						<p>Temperature: {Math.ceil(temperature)} F / {Math.ceil((temperature - 32) / 1.8)} C </p>
					</div>
				</h1>
			</div>
		);
		
	}
}

const mapStateToProps = (state) => {
	return { weather: state.weather, loading: state.loading };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);
