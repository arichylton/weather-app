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
            <div style={{display: 'flex'}} className="secondary menu ui pointing">
                    <h2 className="ui header item">Weather</h2>               
                    <form onSubmit={this.onFormSubmit} className="ui form inverted item" style={{flex: '100 auto'}}>                       
                        <input onChange={(e) => this.setState({ input: e.target.value })} value={this.state.input} type="text" placeholder="Search..."/>
                    </form>    
            </div>
        );
	}
}

export default connect(null, { fetchWeather, loading })(Header);
