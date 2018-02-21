import React from 'react';
import { withStyles } from 'material-ui/styles';
import SolutionChart from './SolutionChart';
import AmountChart from './Line';
import Agents from './AgentChart'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import ProblemChart from './ProblemChart';

const styles = theme => ({
    chartContainer: {
       padding: 20
     },
     charts: {
         padding: 50,
     }
});

class StatisticsList extends React.Component {
    render() {
    const { classes } = this.props;
        return(
            <div className={classes.chartContainer}>
                <div className = {classes.charts}>
                    <Grid container spacing={24}>
                        <Grid item xs={6} >    
                            <p>Whos online at the moment</p>
                        </Grid>
                        <Grid item xs={6} >    
                            <p>Data of pickup times, avg duration and missed chats</p>
                        </Grid>
                    </Grid>
                </div>
                <div className = {classes.charts}>
                    <Grid container spacing={24}>
                        <Grid item xs={6} >    
                            <AmountChart stats={this.props.stats}/>
                        </Grid>
                        <Grid item xs={6} >    
                            <Agents/>
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
        )
           
    }
}

export default withStyles(styles)(StatisticsList);