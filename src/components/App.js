import React from 'react'
import Header from './Header';

import Weather from './Weather';
import './App.css';

class App extends React.Component {

    state = { temp: 0 }

    onSearchSubmit =(zipcode) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&APPID=606965677dc5579fdd0d648e74c25430`)
        .then(res => res.json())
        .then((response) => {
            this.setState({temp: response.main.temp})
            console.log(this.state.temp);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {       
        return (
            <div className="ui container">
                <Header onSubmit={this.onSearchSubmit} />
                <Weather temp={this.state.temp}/>
            </div>
        );
    };
}

export default App;
