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
            <div style={{display: 'flex', borderBottom: '1px solid white'}} className="secondary container menu ui">
                    <h1 style={{color: 'white'}} className="ui header item">Weather App</h1>               
                    <form onSubmit={this.onFormSubmit} className="ui form inverted item" style={{flex: '1', maxWidth: '800px'}}>                       
                        <input onChange={(e) => this.setState({ input: e.target.value })} value={this.state.input} required type="text" placeholder="Search..."/>
                    </form>    
            </div>
        );
	}
}

export default connect(null, { fetchWeather, loading })(Header);
