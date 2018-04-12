import React from 'react';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper/Paper';
import Grid from 'material-ui/Grid/Grid';
import Collapse from 'material-ui/transitions/Collapse';
import Switch from 'material-ui/Switch';

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
      chatList: {
        margin: 20,
        padding:20,
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

let histories = [{
    id:1,
    agent: 'Hanna',
    customer: 'Customer',
    date: '16.1.2018',
    tags: 'maintanance, answered',
    length: '7min',
    chat1: 'I need to change my repair reservation',
    chat2: 'Hi! May I have your licence number?',
    chat3: 'My licence number is xxx-xxx',
    chat4: 'Thank you! Is Äimärautio your nearest location?',
    chat5: 'Yes.',
    chat6: 'Ok. May I have your contact information',
    chat7: 'My number is 555-123123',
    chat8: 'Thank you. I will forward your request and you will be contacted soon!',
    chat9: 'Thanks',
    chat10: 'Thank you, have a nice day!'
  }
]


class HistoryList extends React.Component {
constructor(props){
    super(props);
    this.state = {
        search: '' ,
        checked: false,

    };
}
    updateSearch(event) {
        this.setState({search: event.target.value})

}

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };
    

    render() {
        const { classes } = this.props;
        const { checked } = this.state;
        let filteredHistories = histories.filter(
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

                <div>
                    <Paper style={{height: '100%', margin: 10}}>  
                        <Grid container>
                            <Grid item xs={4} >
                                {filteredHistories.map((chat) => {
                                return <Grid container spacing={8} className={classes.chatList} chat={chat} key={chat.id} >
                                    <Grid item xs={12} >
                                        <Typography >{chat.date}</Typography>
                                        <Typography >Show conversation: 
                                            <Switch checked={checked} onChange={this.handleChange}/>
                                        </Typography>
                                        <Divider/>
                                    </Grid>
                                </Grid>
                                })}
                            </Grid>
                            <Grid item xs={8} >
                            <Collapse in={checked}>
                                {filteredHistories.map((chat) => {
                                    return <Paper className={classes.chatList} chat={chat} key={chat.id}>
                                                <div style={{paddingBottom: 10}}>
                                                <Typography ><strong>{chat.customer}:</strong> {chat.chat1}</Typography>
                                                <Typography ><strong>{chat.agent}:</strong> {chat.chat2}</Typography>
                                                <Typography ><strong>{chat.customer}:</strong> {chat.chat3}</Typography>
                                                <Typography ><strong>{chat.agent}:</strong> {chat.chat4}</Typography>
                                                <Typography ><strong>{chat.customer}:</strong> {chat.chat5}</Typography>
                                                <Typography ><strong>{chat.agent}:</strong> {chat.chat6}</Typography>
                                                <Typography ><strong>{chat.customer}:</strong> {chat.chat7}</Typography>
                                                <Typography ><strong>{chat.agent}:</strong> {chat.chat8}</Typography>
                                                <Typography ><strong>{chat.customer}:</strong> {chat.chat9}</Typography>
                                                <Typography ><strong>{chat.agent}:</strong> {chat.chat10}</Typography>
                                                </div>
                                                <Divider/>
                                                <Typography style={{paddingTop: 10}}><strong>Tags: </strong>{chat.tags}</Typography>
                                            </Paper>
                                    })}
                                </Collapse>
                            </Grid>
                            <Divider/>
                            <Grid item xs={4} >
                                {filteredHistories.map((chat) => {
                                return <Grid container spacing={8} className={classes.chatList} chat={chat} key={chat.id} >
                                    <Grid item xs={12} >
                                        <Typography >{chat.date}</Typography>
                                        <Typography >Show conversation: 
                                            <Switch />
                                        </Typography>
                                        <Divider/>
                                    </Grid>
                                </Grid>
                                })}
                            </Grid>
                            <Grid item xs={8} >
                            </Grid>

                        </Grid>
                    </Paper>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(HistoryList);


