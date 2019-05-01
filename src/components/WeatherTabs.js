import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import { Tab } from 'semantic-ui-react';
import Skycons from 'react-skycons';
import { connect } from 'react-redux';

import './text.css';

class WeatherTabs extends React.Component {
	constructor(props) {
		super(props);

		this._isMounted = false;

		this.state = { time: '' };
	}

	componentDidMount() {
		this._isMounted = true;

		this.setState({ time: moment.tz(this.props.weather.timezone).format('LT z') });
		if (this._isMounted) {
			this.interval = setInterval(() => {
				this.setState({ time: moment.tz(this.props.weather.timezone).format('LT z') });
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		this._isMounted = false;
	}

	style7daysList = (num) => {
		return this.props.daily.filter((day, index) => index === num).map((day) => {
			return (
				<div style={{ margin: '30px 0' }} key={day.time} className="ui raised very padded text">
					<h2 style={{ color: '#fa4b00' }} className="ui horizontal divider header">
						{moment().add(num, 'days').format('dddd, MMMM Do')}
					</h2>

					<div style={{ marginTop: '30px' }} className="ui one column centered grid">
						<div className="ui item" style={{ height: '35%', width: '35%' }}>
							<Skycons color="#fa4b00" icon={day.icon.replace(/-/g, '_').toUpperCase()} autoplay={true} />
						</div>
					</div>
					<div style={{ marginTop: '30px' }} className="ui two column centered grid">
						<div className="four column centered row divided">
							<div className="column aligned center">
								<div className="textb">
									<i style={{ color: '#fa4b00' }} className="ui sun outline icon" />Rise{' '}
								</div>
								<div style={{ fontSize: 17 }} className="textb">
									{moment.unix(day.sunriseTime).format('h:mm a')}
								</div>
							</div>
							<div className="column aligned center">
								<div className="textb">
									<i style={{ color: '#4682B4' }} className="ui sun icon" />Set{' '}
								</div>
								<div style={{ fontSize: 17 }} className="textb">
									{moment.unix(day.sunsetTime).format('h:mm a')}
								</div>
							</div>
						</div>
					</div>
					<div style={{ color: '#cce2ff' }} className="ui raised very padded text" />
					<div style={{ marginTop: '30px' }} className="ui two column centered grid">
						<div className="four column centered row divided">
							<div className="column aligned center">
								<div className="textb">
									<i style={{ color: '#4682B4' }} className="ui thermometer empty icon" />Low{' '}
								</div>
								<div style={{ fontSize: 17, marginBottom: 0 }} className="textb">
									{`${Math.ceil(day.temperatureMin)}˚ F`}
								</div>
							</div>
							<div className="column aligned center">
								<div className="textb">
									<i style={{ color: '#fa4b00' }} className="ui thermometer full icon" />High{' '}
								</div>
								<div style={{ fontSize: 17 }} className="textb">
									{`${Math.ceil(day.temperatureMax)}˚ F`}
								</div>
							</div>
						</div>
						<div className="two column centered row">
							<div className="column aligned center">
								<div className="textb">
									<i
										style={{ color: '#4682B4', marginRight: 6 }}
										className="ui angle double right icon"
									/>{' '}
									Wind
								</div>
								<div className="ui black large horizontal label text">{` ${Math.floor(
									day.windSpeed
								)} mph`}</div>
							</div>
							<div className="column aligned center">
								<div className="textb">
									<i
										style={{ color: '#4682B4', marginRight: 10 }}
										className="ui tachometer alternate icon"
									/>Humid.
								</div>
								<div className="ui black large horizontal label text">{` ${Math.floor(day.humidity * 100)}%`}</div>
							</div>
						</div>
						<div className="two column centered row">
							<div className="column aligned center">
								<div className="textb">
									<i
										style={{ color: '#4682B4', marginRight: 6 }}
										className="ui umbrella icon"
									/>Precip.
								</div>
								<div className="ui black large horizontal label text">{`${day.precipProbability *
									100} %`}</div>
							</div>
							<div className="column aligned center">
								<div className="textb">
									<i style={{ color: '#4682B4', marginRight: 6 }} className="ui sun icon" />UV Index
								</div>
								<div className="ui black large horizontal label text">{day.uvIndex}</div>
							</div>
						</div>
						<div className="two column centered row">
							<div className="column aligned center">
								<div className="textb">
									<i style={{ color: '#4682B4', marginRight: 8 }} className="ui eye icon" />Vis.
								</div>
								<div className="ui black large horizontal label text">{`${Math.floor(
									day.visibility
								)}+ mi`}</div>
							</div>
							<div className="column aligned center">
								<div className="textb">
									<i
										style={{ color: '#4682B4', marginRight: 8 }}
										className="ui weight icon"
									/>Pressure
								</div>
								<div className="ui black large horizontal label text">{`${Math.floor(
									day.pressure
								)} mb`}</div>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};

	render7daysList = () => {
		const panes = [
			{
				menuItem: 'Tomorrow',
				render: () => <Tab.Pane attached={false}>{this.style7daysList(1)}</Tab.Pane>
			},
			{
				menuItem: moment().add(2, 'days').format('ddd Do'),
				render: () => <Tab.Pane attached={false}>{this.style7daysList(2)}</Tab.Pane>
			},
			{
				menuItem: moment().add(3, 'days').format('ddd Do'),
				render: () => <Tab.Pane attached={false}>{this.style7daysList(3)}</Tab.Pane>
			},
			{
				menuItem: moment().add(4, 'days').format('ddd Do'),
				render: () => <Tab.Pane attached={false}>{this.style7daysList(4)}</Tab.Pane>
			},
			{
				menuItem: moment().add(5, 'days').format('ddd Do'),
				render: () => <Tab.Pane attached={false}>{this.style7daysList(5)}</Tab.Pane>
			},
			{
				menuItem: moment().add(6, 'days').format('ddd Do'),
				render: () => <Tab.Pane attached={false}>{this.style7daysList(6)}</Tab.Pane>
			},
			{
				menuItem: moment().add(7, 'days').format('ddd Do'),
				render: () => <Tab.Pane attached={false}>{this.style7daysList(7)}</Tab.Pane>
			}
		];

		return (
			<div>
				<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
			</div>
		);
	};

	renderCurrentWeather = () => {
		const {
			apparentTemperature,
			humidity,
			windSpeed,
			dewPoint,
			uvIndex,
			visibility,
			pressure
		} = this.props.weather;

		return (
			<div style={{ margin: '30px 0' }} className="ui raised very padded">
				<h2 style={{ color: '#fa4b00' }} className="ui horizontal divider header">
					{this.state.time}
				</h2>
				<div style={{ color: '#cce2ff' }} className="ui raised very padded text" />
				<div style={{ marginTop: '20px' }} className="ui two column centered grid">
					<div className="column aligned center">
						<div className="textb">
							<i className="ui thermometer half black icon" />Temp{' '}
						</div>
						<div className="textb">{`${Math.ceil(apparentTemperature)}˚ F / ${Math.ceil(
							(apparentTemperature - 32) / 1.8
						)}˚ C`}</div>
					</div>
					<div className="two column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i
									style={{ color: '#4682B4', marginRight: 6 }}
									className="ui angle double right icon"
								/>{' '}
								Wind
							</div>
							<div className="ui black large horizontal label text">{` ${Math.floor(
								windSpeed
							)} mph`}</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i
									style={{ color: '#4682B4', marginRight: 10 }}
									className="ui tachometer alternate icon"
								/>Humid.
							</div>
							<div className="ui black large horizontal label text">{` ${Math.floor(humidity * 100)}%`}</div>
						</div>
					</div>
					<div className="two column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 6 }} className="ui tint icon" />Dew Pt
							</div>
							<div className="ui black large horizontal label text">{`${Math.floor(dewPoint)}˚`}</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 6 }} className="ui sun icon" />UV Index
							</div>
							<div className="ui black large horizontal label text">{uvIndex}</div>
						</div>
					</div>
					<div className="two column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 8 }} className="ui eye icon" />Vis.
							</div>
							<div className="ui black large horizontal label text">{`${Math.floor(
								visibility
							)}+ mi`}</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 8 }} className="ui weight icon" />Pressure
							</div>
							<div className="ui black large horizontal label text">{`${Math.floor(pressure)} mb`}</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	renderTodayWeather = () => {
		const {
			apparentTemperature,
			humidity,
			windSpeed,
			precipProbability,
			uvIndex,
			visibility,
			pressure,
			temperatureMin,
			temperatureMax,
			sunsetTime,
			sunriseTime
		} = this.props.weather;

		return (
			<div style={{ margin: '30px 0' }} className="ui raised very padded">
				<h2 style={{ color: '#fa4b00' }} className="ui horizontal divider header">
					{moment().add(0, 'days').format('dddd, MMMM Do')}
				</h2>
				<div style={{ marginTop: '30px' }} className="ui two column centered grid">
					<div className="four column centered row divided">
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#fa4b00' }} className="ui sun outline icon" />Rise{' '}
							</div>
							<div style={{ fontSize: 17 }} className="textb">
								{moment.unix(sunriseTime).format('h:mm a')}
							</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4' }} className="ui sun icon" />Set{' '}
							</div>
							<div style={{ fontSize: 17 }} className="textb">
								{moment.unix(sunsetTime).format('h:mm a')}
							</div>
						</div>
					</div>
				</div>
				<div style={{ color: '#cce2ff' }} className="ui raised very padded text" />
				<div style={{ marginTop: '30px' }} className="ui two column centered grid">
					<div className="four column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4' }} className="ui thermometer empty icon" />Low{' '}
							</div>
							<div style={{ fontSize: 17, marginBottom: 0 }} className="textb">
								{`${Math.ceil(temperatureMin)}˚ F`}
							</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#black' }} className="ui thermometer half black icon" />Now{' '}
							</div>
							<div style={{ fontSize: 17 }} className="textb">
								{`${Math.ceil(apparentTemperature)}˚ F`}
							</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#fa4b00' }} className="ui thermometer full icon" />High{' '}
							</div>
							<div style={{ fontSize: 17 }} className="textb">
								{`${Math.ceil(temperatureMax)}˚ F`}
							</div>
						</div>
					</div>
					<div className="two column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i
									style={{ color: '#4682B4', marginRight: 6 }}
									className="ui angle double right icon"
								/>{' '}
								Wind
							</div>
							<div className="ui black large horizontal label text">{` ${Math.floor(
								windSpeed
							)} mph`}</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i
									style={{ color: '#4682B4', marginRight: 10 }}
									className="ui tachometer alternate icon"
								/>Humid.
							</div>
							<div className="ui black large horizontal label text">{` ${Math.floor(humidity * 100)}%`}</div>
						</div>
					</div>
					<div className="two column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 6 }} className="ui umbrella icon" />Precip.
							</div>
							<div className="ui black large horizontal label text">{`${precipProbability * 100} %`}</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 6 }} className="ui sun icon" />UV Index
							</div>
							<div className="ui black large horizontal label text">{uvIndex}</div>
						</div>
					</div>
					<div className="two column centered row">
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 8 }} className="ui eye icon" />Vis.
							</div>
							<div className="ui black large horizontal label text">{`${Math.floor(
								visibility
							)}+ mi`}</div>
						</div>
						<div className="column aligned center">
							<div className="textb">
								<i style={{ color: '#4682B4', marginRight: 8 }} className="ui weight icon" />Pressure
							</div>
							<div className="ui black large horizontal label text">{`${Math.floor(pressure)} mb`}</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const panes = [
			{
				menuItem: 'Current',
				render: () => <Tab.Pane attached={false}>{this.renderCurrentWeather()}</Tab.Pane>
			},
			{
				menuItem: 'Today',
				render: () => <Tab.Pane attached={false}>{this.renderTodayWeather()}</Tab.Pane>
			},
			{
				menuItem: 'Next 7 days',
				render: () => <Tab.Pane attached={false}>{this.render7daysList()}</Tab.Pane>
			}
		];

		return (
			<div>
				<Tab menu={{ inverted: true, secondary: true, pointing: true }} panes={panes} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { weather: state.weather, loading: state.loading, daily: state.daily };
};

export default connect(mapStateToProps)(WeatherTabs);
