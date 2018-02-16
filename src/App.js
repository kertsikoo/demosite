import React from 'react';
import { Link, Route } from 'react-router-dom';
import History from './components/History';
import Statistics from './components/Statistics';
import Billing from './components/Billing';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';

let bills = [{
  id: 1,
  amount: '100€',
  date: 'today',
  detail: 'Detail1'
},
{ id: 2,
  amount: '200€',
  date:'tomorrow',
  detail: 'Detail2'
},
{  id: 3,
  amount: '300€',
  date:'yesterday',
  detail: 'Detail3'
},
{ id: 4,
  amount: '400€',
  date:'never',
  detail: 'Detail4'
},
{ id: 5,
  amount: '400€',
  date:'never',
  detail: 'Detail4'
},
{ id: 6,
  amount: '400€',
  date:'never',
  detail: 'Detail4 Testdetail of a bit longer description, lorem ipsun jadajadajaa.'
}]

let stats = [{
  value: 5,
  label:  "more than 5"
},
{
  label: "5-13",
  value: 5
},
{
  label: "14-17",
  value:  17
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
           {value === 1 && <Route path="/billing" component={ () => <Billing bills={bills}/>}/>}
           {value === 2 && <Route path="/statistics" component={ () => <Statistics stats={stats}/>}/>}
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
