import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather, loading } from '../actions';

class Header extends React.Component {
    state = { input: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.loading(true);
        this.props.fetchWeather(this.state.input);
        
    }

	render() {
		return (
            <div className="secondary menu ui pointing">
                <h2 style={{color: 'black'}} className="ui header item">Weather</h2>
                <div className="ui field inverted item">
                    <form onSubmit={this.onFormSubmit} style={{width: 950}} className="ui form inverted">                       
                        <input onChange={(e) => this.setState({ input: e.target.value })} value={this.state.input} type="text" placeholder="Search a location for some cool weather information"/>
                    </form> 
                </div>      
            </div>
        );
	}
}

export default connect(null, { fetchWeather, loading })(Header);
