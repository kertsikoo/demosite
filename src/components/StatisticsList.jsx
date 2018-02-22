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

const styles = theme => ({
    chartContainer: {
       padding: 20
     },
     charts: {
         padding: 50,
     },
     chatTimes: {
        marginTop: -20,
        display: "inline-block",
        fontFamily: "Helvetica",
        fontSize: 30,
        textAlign: "center"
     },
     rating: {
        padding: 10,
        width: '70%',
        height: '70%'
     },
});


class StatisticsList extends React.Component {
    render() {

    const { classes } = this.props;


        return(
            <div>
                <div className={classes.chartContainer}>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >    
                                <AmountChart stats={this.props.stats}/>
                            </Grid> 
                            <Grid item xs={6} className={classes.chatTimes}>    
                                <div>
                                    <p>Missed chats: <br/> {this.props.missedChats}</p>
                                    <p>The average pick up time: <br/> <CountUp start={0} end={9.62} 
                                    duration={3} decimals={2} decimal="," />sec </p>
                                    <p>Avg duration: <br/> {this.props.duration}</p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className = {classes.charts}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >    
                                <div className = {classes.rating}>
                                    <Ratings />
                                </div>
                            </Grid>
                            <Grid item xs={6} >    
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
                <p>Agents online: </p>
                <Grid container spacing={8} className = {classes.charts}>
                        {this.props.onlineAgents.map((agent) => {
                            return <Grid item xs={6}>
                                <div agent={agent} key={agent.agentId}>
                                            <img src={agent.image} alt='' width={50} />
                                            {agent.name}
                                </div>
                            </Grid>
                        })}
                </Grid>
                <Divider/>
            </div>
        )
           
    }
}

export default withStyles(styles)(StatisticsList);