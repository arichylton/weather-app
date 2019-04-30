import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
	render() {
		if (!this.props.weather.adminArea3) {
			return (
				<div className="default">
					<div className="ui container">
						<Header />
						<Weather />
					</div>
				</div>
			);
		}

		if (this.props.loading) {
			return (
				<div className={this.props.weather.icon}>
					<div className="ui active dimmer">
						<div className="ui big text loader">Searching...</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className={this.props.weather.icon}>
					<div className="ui container">
						<Header />
						<Weather />
                        <Footer />
					</div>
				</div>
                <div className="ui container">
                   
                </div>				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { weather: state.weather, loading: state.loading };
};

export default connect(mapStateToProps)(App);
