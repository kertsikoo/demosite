import React from 'react';
import { withStyles } from 'material-ui/styles';
import SolutionChart from './SolutionChart';
import AmountChart from './Line';
import Agents from './AgentChart'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import ProblemChart from './ProblemChart';
import CountUp from 'react-countup';
import Ratings from './Ratings';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography/Typography';

const styles = theme => ({
    root: {
        padding: 20,
        paddingTop: 0
      },
     charts: {
         padding: 30,
     },
     numerical: {
        marginTop: 50,
        textAlign: 'center'
     },
     chatTimes: {
        display: "inline-block",
        fontFamily: "Helvetica",
        fontSize: 20,
        color: '#4d4d4d',

     },
   
     typography: {
        color: 'grey',
        paddingBottom: 10
      },
});


class StatisticsList extends React.Component {

    
    render() {

    const { classes } = this.props;


        return(
            <div className={classes.root}>
                <Paper  elevation={4}>
                <div>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >    
                            <Typography className={classes.typography}>NUMBER OF CHATS</Typography>
                                <AmountChart stats={this.props.stats}/>
                            </Grid> 
                            <Grid item xs={6} className={classes.chatTimes}>    
                                <div >
                                <Typography className={classes.typography}>RATINGS</Typography>
                                    <Ratings />
                                </div>
                                <Grid container spacing={0} className={classes.numerical}>
                                <Grid item xs={4} >Missed chats: <br/> {this.props.missedChats}</Grid>
                                <Grid item xs={4} >  Average wait: <br/> <CountUp start={0} end={9.62} 
                                    duration={2} decimals={2} decimal="," />sec </Grid>
                                <Grid item xs={4} >  Average duration: <br/> {this.props.duration}</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} >    
                            <Typography className={classes.typography}>CHATS BY AGENT</Typography>
                                <Agents />
                            </Grid>
                        </Grid>
                    </div>
                    <Divider/>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >    
                                <ProblemChart/> 
                            </Grid>
                            <Grid item xs={6} >    
                                <SolutionChart/> 
                            </Grid>
                        </Grid>
                    </div>
                </div>
                </Paper>
            </div>
        )
           
    }
}

export default withStyles(styles)(StatisticsList);