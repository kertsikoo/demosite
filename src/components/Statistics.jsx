import React from 'react';
import StatisticsList from './StatisticsList';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography/Typography';

const styles = theme => ({
  agents: {
    textAlign: 'center',
    alignContent: 'center',
   },
   paper: {
     backgroundColor: '#f2f2f2',
      margin: 20,
      padding: 20,
   },
   typography: {
     color: 'grey',
   },
  tabs: {
    textAlign: 'center',
    marginTop: 60,
    height: 30,

  }
  });

class Statistics extends React.Component{
  render(){

    const { classes } = this.props;

    return( 
  <div>
    <div className={classes.agents}>
      <Paper className={classes.paper} elevation={1}>
          <Grid container>
              <Typography className={classes.typography}>ONLINE AGENTS: </Typography>
                  {this.props.onlineAgents.map((agent) => {
                      return <Grid item xs={1}>
                          <div agent={agent} key={agent.agentId}>
                                      <img src={agent.image} alt='' width={50} />
                          <Typography>{agent.name}</Typography>
                          </div>
                      </Grid>
                  })}
          </Grid>
      </Paper>
    </div>
    <div>
      <Typography className={classes.tabs}>vuosi, kuukausi, viimeinen vuorokausi</Typography>
      <StatisticsList stats={this.props.stats}  duration='12,3 minutes' missedChats='0'/>
    </div>
  </div>
  ) 

}}

export default withStyles(styles)(Statistics);