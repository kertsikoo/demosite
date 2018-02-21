import React from 'react';
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

class HistoryList extends React.Component {
constructor(){
    super();
    this.state = {
        search: '' ,
        histories: [{
          id:1,
          agent: 'Hanna',
          date: '16.1.2018',
          tags: 'maintanance, answered',
          length: '7min',
          chat: 'I need to reserve a repair. My licence number is xxx-xxx. Heres my number 555-1234123'
        },
        {
          id:2,
          agent: 'Anni',
          date: '1.2.2018',
          tags: 'sales, lead',
          length: '3min',
          chat: 'Hey I want to buy a car.'
        },
      ]
    };
}
    updateSearch(event) {
        this.setState({search: event.target.value})
}
    render() {
        const { classes } = this.props;

        let filteredHistories = this.state.histories.filter(
            (chat) => {
                return chat.date.indexOf(this.state.search) !== -1; 
            }
        );

        return (
            <div>
                <div className= {classes.input}>
                    <Input type="text" value={this.state.search} placeholder="Find a chat by date"
                    onChange={this.updateSearch.bind(this)} />
                </div>
                <div className={classes.root}>
                <GridList  className={classes.gridList} cols={3}>
                        {filteredHistories.map((chat) => {
                            return <GridListTile chat={chat} key={chat.id}> 
                                <ExpansionPanel >
                                    <ExpansionPanelSummary >
                                        <div className={classes.column}>
                                            <Typography className={classes.heading}>{chat.date}</Typography>
                                        </div>
                                        <div>
                                          <Typography >Tags: {chat.tags}</Typography>
                                      </div>
                                    </ExpansionPanelSummary>    
                                    <Divider />
                                    <ExpansionPanelDetails >
                                    <div className={classes.column}>
                                            <Typography className={classes.secondaryHeading}>{chat.agent}</Typography>
                                        </div>
                                      <div className={classes.column}>
                                        <Typography >Length: {chat.length}</Typography>
                                      </div>
                                    </ExpansionPanelDetails>
                                    <ExpansionPanelDetails>
                                      <Typography>{chat.chat}</Typography>
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

export default withStyles(styles)(HistoryList);