import React from 'react';
import Bill from './Bill';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

const styles = theme => ({
   input: {
      margin: theme.spacing.unit,
      display: 'flex',
      justifyContent: 'center',
      padding: 20
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        padding: 20,
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2',
      },
      panelSummary: {
          height: 70,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
      },
      column: {
        flexBasis: '33.3%',
      },
     
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
                <div className={classes.root}>
                <GridList  className={classes.gridList} cols={3} spacing={16}>
                        {filteredBills.map((bill) => {
                            return <GridListTile> 
                                <ExpansionPanel >
                                    <ExpansionPanelSummary className={classes.panelSummary}>
                                        <Bill bill={bill} key={bill.id}/>
                                        <div className={classes.column}>
                                            <Typography className={classes.heading}>{bill.amount}</Typography>
                                        </div>
                                        <div className={classes.column}>
                                            <Typography className={classes.secondaryHeading}>{bill.date}</Typography>
                                        </div>
                                    </ExpansionPanelSummary>    
                                    <Divider />
                                    <ExpansionPanelDetails >
                                        <Typography>{bill.detail}</Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </GridListTile>
                        })}
                    </GridList>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(BillingList);