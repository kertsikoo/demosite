import React from 'react';
import { Link, Route } from 'react-router-dom';
import History from './components/History';
import Statistics from './components/Statistics';
import BillingList from './components/BillingList';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';

let bills = [{
  id: 1,
  amount: '100€',
  type: 'Bill',
  date: 'today',
  detail: 'Detail1, I added a longer message here to test the expansion panel for bugs in this view. Is it still ok if i keep on writing longer? How about if I exceed the space provided here in between these two paper'
},
{ id: 2,
  amount: '200€',
  type: 'Bill',
  date:'tomorrow',
  detail: 'Detail2'
},
{  id: 3,
  amount: '300€',
  type: 'Bill',
  date:'yesterday',
  detail: 'Detail3'
},
{ id: 4,
  amount: '400€',
  type: 'Reminder',
  date:'never',
  detail: 'Detail4'
},
{ id: 5,
  amount: '400€',
  type: 'Reminder',
  date:'never',
  detail: 'Detail4'
},
{ id: 6,
  amount: '400€',
  type: 'Bill',
  date:'never',
  detail: 'Detail4 Testdetail of a bit longer description, lorem ipsun jadajadajaa.'
}]

const stats = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
  datasets: [
    {
      label: 'Chats per time',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'grey',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'grey',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4, 53, 52, 86, 81, 56, 55, 40]
    }
  ]
};

let onlineAgents = [
{
  agentId: 1,
  name: 'Agent 1',
  image: require('./anonym.png')

},
{
  agentId: 2,
  name: 'Agent 2',
  image: require('./anonym.png')
}]


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:0,
    text: 'black'
  },
  text: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Helvetica'

  }
});


class App extends React.Component {
  state = {
    value: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  }

 

  render(){
    const { classes } = this.props;
    const { value } = this.state;

    return (
      
 // The initial state of the value of tabs has a bug     
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="inherit"
              centered>
                <Tab label="Histories" component={Link} to="/history" />
                <Tab label="Billing" component={Link} to="/billing"/>
                <Tab label="Statistics" component={Link} to="/statistics"/>
          </Tabs>
        </AppBar>
           {value === 0 && <Route path="/history"  component={History}/>}
           {value === 1 && <Route path="/billing" component={ () => <BillingList bills={bills}/>}/>}
           {value === 2 && <Route path="/statistics" component={ () => <Statistics stats={stats} onlineAgents={onlineAgents} />}/>}
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
