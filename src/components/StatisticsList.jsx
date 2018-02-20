import React from 'react';
import { withStyles } from 'material-ui/styles';
import SolutionChart from './SolutionChart';
import LineChart from './Line';
import Agents from './AgentChart'
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import ProblemChart from './ProblemChart';
//import Stat from './Stat';
//import BarChart from './BarChart';
//import PieChart from './PieChart';
//import PieChart2 from './PieChart2';

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
                            <LineChart/>
                        </Grid>
                        <Grid item xs={6} >    
                            <Agents/>
                        </Grid>
                    </Grid>
                </div>
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
            {/* <div>
                <ul>
                    {this.props.stats.map((stat) => {
                        return <Stat stat={stat} />                        
                    })}
                </ul>
                <div >
                   <BarChart data={[5,10,1,3,4,5,2,11]} size={[500,200]} />
                    <PieChart data={[{
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
                                    }]}/>
                    <PieChart2/> */}
    }
}

export default withStyles(styles)(StatisticsList);