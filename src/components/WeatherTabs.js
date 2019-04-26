import React from 'react'
import { Tab } from 'semantic-ui-react'
import { connect } from 'react-redux';


class WeatherTabs extends React.Component {

  render() {
    const panes = [
      { menuItem: 'Current', render: () => <Tab.Pane>Tab 1 hey</Tab.Pane> },
      { menuItem: 'Today', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Next 7 days', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]
    
    return (
      <div className="ui header" style={{marginTop: '40px'}}>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { weather: state.weather, loading: state.loading, daily: state.daily };
}

export default connect(mapStateToProps)(WeatherTabs);