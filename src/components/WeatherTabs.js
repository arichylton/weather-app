import React from 'react';
import { Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';

class WeatherTabs extends React.Component {
	render() {
		const panes = [
			{
				menuItem: 'Tab 1',
				render: () => (
					<Tab.Pane attached={false}>
						<div className="ui raised very padded text">
							<h2 className="ui header">Current Weather Data: </h2>
							<h3>Temperature: {this.props.weather.apparentTemperature}</h3>
							<h3>Temperature: {this.props.weather.apparentTemperature}</h3>
							<h3>Temperature: {this.props.weather.apparentTemperature}</h3>
						</div>
					</Tab.Pane>
				)
			},
			{ menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
			{ menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> }
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
