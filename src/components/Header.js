import React from 'react';

class Header extends React.Component {
    state = { input: '' }

    onFormSubmit = event => {
        event.preventDefault();

        console.log(this.state.input);
        this.props.onSubmit(this.state.input);
    }

	render() {
		return (
            <div className="secondary menu ui pointing">
                <h2 style={{color: 'white'}} className="item">Weather</h2>
                <div className="ui field inverted item">
                    <form onSubmit={this.onFormSubmit} style={{width: 950}} className="ui form inverted">                       
                        <input onChange={(e) => this.setState({ input: e.target.value })} value={this.state.input} type="text" placeholder="Search location"/>            
                    </form>
                </div>      
            </div>
        );
	}
}

export default Header;
