import React from 'react';
//import Bill from './Bill';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import {ExpansionPanelSummary} from 'material-ui/ExpansionPanel';
import Grid from 'material-ui/Grid';

const styles = theme => ({
   input: {
      margin: theme.spacing.unit,
      display: 'flex',
      justifyContent: 'center',
      padding: 20
    },
    content: {
        marginTop: theme.spacing.unit * 3,
        padding: 20,
      },
      summary: {
          padding: 5,
      },
      list: {
          listStyle: 'none',
      },
      headline: {
          paddingBottom: 5
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '49%',
        width: '50%'
        
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        width: '50%'
      },
      billDetail: {
          padding: 20,
          margin: 20,
          border: '1px solid lightgrey'
      }
      

     
});

class BillingList extends React.Component {
constructor(){
    super();
    this.state = {
        search: '' 
    };
}
    updateSearch(event) {
        this.setState({search: event.target.value})
}
    render() {
        const { classes } = this.props;
        let filteredBills = this.props.bills.filter(
            (bill) => {
                return bill.date.indexOf(this.state.search) !== -1; 
            }
        );

        return (
            <div>
                <div className= {classes.input}>
                    <Input type="text" value={this.state.search} placeholder="Find a Bill by date"
                    onChange={this.updateSearch.bind(this)} />
                </div>
                <div className={classes.content}>
                    <Paper >
                        <Grid container>
                            <Grid item xs={4} >
                            {filteredBills.map((bill) => {
                                return <div bill={bill} key={bill.id} className={classes.summary}> 
                                    <ul className={classes.list}>
                                        <li>
                                            <ExpansionPanelSummary >
                                                <Typography className={classes.heading}><b>Category:</b> {bill.type}</Typography>
                                                <Typography className={classes.secondaryHeading}> <b>Due date: </b>{bill.date}</Typography>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                        </li>
                                    </ul>
                                </div>
                            })}
                            </Grid>
                            <Grid item xs={8}>
                            {filteredBills.map((bill) => {
                                return <div bill={bill} key={bill.id} className={classes.billDetail}>
                                    <p>{bill.detail}</p>
                                </div>
                            })}
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(BillingList);