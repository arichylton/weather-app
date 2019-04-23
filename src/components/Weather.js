import React from 'react'

class Weather extends React.Component {
    render() {       
        return (
            <div>
                <h1 className="item">Weather is {this.props.temp} F in London</h1>
            </div>
        );
    };
}

export default Weather;