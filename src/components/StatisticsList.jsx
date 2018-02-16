import React from 'react';
import { withStyles } from 'material-ui/styles';
import Stat from './Stat';
import BarChart from './BarChart';
import PieChart from './PieChart';
//import PieChart2 from './PieChart2';

const styles = theme => ({
    charts: {
       margin: theme.spacing.unit,
       display: 'flex',
       justifyContent: 'center',
       padding: 20
     },
});

class StatisticsList extends React.Component {
    render() {
    const {classes} = this.props;
        return(
            <div>
                <ul>
                    {this.props.stats.map((stat) => {
                        return <Stat stat={stat} />                        
                    })}
                </ul>
                <div className={classes.charts}>
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
                    {/*<PieChart2/> */}
                </div>
            </div>

        )
    }
}

export default withStyles(styles)(StatisticsList);