import React from 'react';
import { Link, Route } from 'react-router-dom';
import History from './History';
import Statistics from './Statistics';
import BillingList from './BillingList';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';

let bills = [{
  id: 1,
  amount: '100€',
  type: 'Invoice',
  date: '2.3.2018',
  detail: 'Detail1'
},
{ id: 2,
  amount: '200€',
  type: 'Invoice',
  date:'1.1.2018',
  detail: 'Detail2'
},
{  id: 3,
  amount: '300€',
  type: 'Reminder',
  date:'1.1.2000',
  detail: 'Detail3'
},
{ id: 4,
  amount: '400€',
  type: 'Reminder',
  date:'1.2.1999',
  detail: 'Detail4'
},
{ id: 5,
  amount: '400€',
  type: 'Invoice',
  date:'1.1.2021',
  detail: 'Detail4'
},
{ id: 6,
  amount: '400€',
  type: 'Invoice',
  date:'4.5.2018',
  detail: 'Detail4'
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
  image: require('../anonym.png')

},
{
  agentId: 2,
  name: 'Agent 2',
  image: require('../anonym.png')
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



class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selectedIndex: false
    }
  }
  

//  handleChange = (event, value) => {
  //  this.setState({ value });
  //}

 

  render(){
    const { classes } = this.props;

    return (   
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={this.state.selectedIndex}
              onChange={index => this.setState({ selectedIndex: index })}
              indicatorColor="primary"
              textColor="inherit"
              centered>
                <Tab label="Statistics" component={Link} to="/statistics"/> 
                <Tab label="Histories" component={Link} to="/history" />
                <Tab label="Invoices" component={Link} to="/billing"/>
                {this.props.button}
          </Tabs>
        </AppBar>
           <Route path="/statistics" component={ () => <Statistics stats={stats} onlineAgents={onlineAgents}/>}/>
           <Route path="/history"  component={History}/>
           <Route path="/billing" component={ () => <BillingList bills={bills}/>}/>
      </div>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);