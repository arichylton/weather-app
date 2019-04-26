import React from 'react';
import { connect } from 'react-redux';
import Skycons from 'react-skycons';

import { fetchWeather } from '../actions';
import WeatherAccordian from './WeatherTabs';

class Weather extends React.Component {
	renderDayWeather() {
		return ( 		
			this.props.daily.filter((day, index) => index === 0)
			.map(day => {
				return(
					<div className="item" key={day.time}>
						{day.summary}
					</div>
				)				
			}) 			
		);
	}

	render() {
		const { apparentTemperature, adminArea5, adminArea3 } = this.props.weather;

		if (!adminArea3) {
			return (
				<div className="ui raised very padded text container segment">
					<h2 className="ui header aligned center">Search a location for cool weather data!</h2>
					<div className="ui fluid placeholder">
						<div className="line"></div>							
						<div className="line"></div>							
						<div className="line"></div>							
						<div className="line"></div>							
					</div>
				</div>
			);
		} else if (!adminArea5) {
			return (
				<div>
					<div className="ui raised very padded text small container segment">
					<h1 className="ui header centered">
						Weather for {adminArea3}
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
						<p>

						</p>						
						{this.renderDayWeather()}
					
					</h3>
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
							Feels like: {Math.ceil(apparentTemperature)} F / {Math.ceil((apparentTemperature - 32) / 1.8)} C{' '}
						</p>
						<p>

						</p>						
						{this.renderDayWeather()}
					
					</h3>
					<WeatherAccordian />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { weather: state.weather, loading: state.loading, daily: state.daily };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);
