import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone';
import { Tab } from 'semantic-ui-react';
import Skycons from 'react-skycons';
import { connect } from 'react-redux';

class WeatherTabs extends React.Component {
	constructor(props) {
		super(props);

		this._isMounted = false;

		this.state = { time: '' };
	}

	componentDidMount() {
		this._isMounted = true;

		this.setState({ time: moment.tz(this.props.weather.timezone).format('LT')});
		if (this._isMounted) {
			this.interval = setInterval(() => {
				this.setState({ time: moment.tz(this.props.weather.timezone).format('LT') });
			});
		}
	}



	componentWillUnmount() {
		clearInterval(this.interval);
		this._isMounted = false;
	}

	render7daysList = (num) => {
		return this.props.daily.filter((day, index) => index === num).map((day) => {
			return (
				<div style={{ marginTop: '30px' }} key={day.time} className="ui raised very padded text">
					<h2 className="ui horizontal divider header">{moment().add(num, 'days').format('dddd MMMM Do')}</h2>
					<div className="ui item" style={{ height: '35%', width: '35%' }}>
						<Skycons color="#fa4b00" icon={day.icon.replace(/-/g, '_').toUpperCase()} autoplay={true} />
					</div>
					<table className="ui  table">
						<tbody>
							<tr>
								<td className="two wide column">Size</td>
								<td>1" x 2"</td>
							</tr>
							<tr>
								<td>Weight</td>
								<td>6 ounces</td>
							</tr>
							<tr>
								<td>Color</td>
								<td>Yellowish</td>
							</tr>
							<tr>
								<td>Odor</td>
								<td>Not Much Usually</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		});
	};

	renderCurrentWeather = () => {
		return (
			<div style={{ marginTop: '30px' }} className="ui raised very padded text">
				<h2 className="ui horizontal divider header">{this.state.time}</h2>
				<table className="ui table">
					<tbody>
						<tr>
							<td className="two wide column">
								<h4>Temp</h4>
							</td>
							<td>{this.props.weather.apparentTemperature}</td>
						</tr>
						<tr>
							<td>Weight</td>
							<td>6 ounces</td>
						</tr>
						<tr>
							<td>Color</td>
							<td>Yellowish</td>
						</tr>
						<tr>
							<td>Odor</td>
							<td>Not Much Usually</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	};

	renderTodayWeather = () => {
		return (
			<div style={{ marginTop: '30px' }} className="ui raised very padded text">
				<h2 className="ui horizontal divider header">{moment().add(0, 'days').format('dddd MMMM Do')}</h2>
				<table className="ui table">
					<tbody>
						<tr>
							<td className="two wide column">
								<h4>Temp</h4>
							</td>
							<td>{this.props.weather.apparentTemperature}</td>
						</tr>
						<tr>
							<td>Weight</td>
							<td>6 ounces</td>
						</tr>
						<tr>
							<td>Color</td>
							<td>Yellowish</td>
						</tr>
						<tr>
							<td>Odor</td>
							<td>Not Much Usually</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	};

	render() {
		const panes = [
			{
				menuItem: 'Current',
				render: () => <Tab.Pane attached={false}>{this.renderCurrentWeather()}</Tab.Pane>
			},
			{ menuItem: 'Today', render: () => <Tab.Pane attached={false}>{this.renderTodayWeather()}</Tab.Pane> },
			{
				menuItem: 'Next 7 days',
				render: () => (
					<Tab.Pane attached={false}>
						{this.render7daysList(0)}
					</Tab.Pane>
				)
			}
		];

		return (
			<div>
				<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { weather: state.weather, loading: state.loading, daily: state.daily };
};

export default connect(mapStateToProps)(WeatherTabs);
