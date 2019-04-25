import React from 'react';
import { connect } from 'react-redux';
import Skycons from 'react-skycons';

import { fetchWeather } from '../actions';

class Weather extends React.Component {
	render() {
		const { apparentTemperature, adminArea5, adminArea3 } = this.props.weather;

		if (!adminArea3) {
			return (
				<div className="ui raised very padded text container segment">
					<h2 className="ui header aligned center">Search a location for cool weather data!</h2>
				</div>
			);
		} else if (!adminArea5) {
			return (
				<div>
					<div className="ui raised very padded text container segment">
						<h2 className="ui header">Weather for {adminArea3}</h2>
						<p>Temperature: {Math.ceil(apparentTemperature)}F</p>
					</div>
				</div>
			);
		}

		if (this.props.loading) {
			return (
				<div className="ui raised very padded text small container segment">
					<h1 className="ui header centered">
						Searching...
					</h1>
					<div className="ui active centered inline loader white">

					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="ui raised very padded text small container segment">
					<h1 className="ui header centered">
						Weather for {adminArea5}, {adminArea3}
					</h1>
					<div
						className="ui very padded container aligned"
						style={{ height: '35%', width: '35%', marginTop: 40 }}
					>
						<Skycons
							color="#fa4b00"
							icon={this.props.weather.icon.replace(/-/g, '_').toUpperCase()}
							autoplay={true}
						/>
					</div>
					<h3 className="ui header centered" style={{ marginTop: 40 }}>
						<p>
							Current temperature: {Math.ceil(apparentTemperature)} F / {Math.ceil((apparentTemperature - 32) / 1.8)} C{' '}
						</p>
					</h3>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { weather: state.weather, loading: state.loading };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);
