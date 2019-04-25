import React from 'react'
import { connect } from 'react-redux';

import Header from './Header';
import Video from './Video';
import Weather from './Weather';
import './App.css';

class App extends React.Component {

    render() {       
        return (
            <div className={this.props.weather.icon}>           
                <div className="ui container">
                    <Header />                        
                    <Weather />
                    <Video />                
                </div>
                                                 
            </div>               
        );
    };
}

const mapStateToProps = state => {
    return { weather: state.weather}
}

export default connect(mapStateToProps)(App);
