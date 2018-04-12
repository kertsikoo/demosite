import React from 'react';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper/Paper';
import Grid from 'material-ui/Grid/Grid';
import Detail from './HistoryDetail'

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
      }
});


class HistoryList extends React.Component {
constructor(props){
    super(props);
    this.state = {
        chat: '' ,
        search: '',
        histories: [{
            id:1,
            agent: 'Hanna',
            customer: 'Customer',
            date: '16.1.2018',
            tags: 'maintanance, answered',
            length: '7min',
            conversation: 'I need to change my repair reservation',
          },
          {
            id: 2,
            agent: 'Anni',
            customer: 'Customer',
            date: '7.1.2018',
            tags: 'maintanance, else',
            length: '6min',
            conversation: 'I need a phone number to my local maintanance company'},
          {
            id: 3,
            agent: 'Lassi',
            customer: 'Customer',
            date: '16.1.1999',
            tags: 'maintanance, else',
            length: '6min',
            conversation: 'I need a phone number',
          }
        ]
    };
}
    updateSearch(event) {
        this.setState({search: event.target.value})

}

   // onItemClick(chat,e) {
     //   this.setState({chat})
    //}

    getDetail(){
        const histories = this.state.histories;
        return histories.map((chat, i) => {
           return <Detail isOpen={this.state.isOpen} date={chat.date} agent={chat.agent} 
           conversation={chat.conversation} length={chat.length} key={i}/>
        })
    }
   
    render() {
        const { classes } = this.props;
        let filteredHistories = this.state.histories.filter(
            (chat) => {
                return chat.date.indexOf(this.state.search) !== -1; 
            }
        );
        let detail = this.getDetail();
        return (
            <div>
                <div className= {classes.input}>
                    <Input type="text" value={this.state.search} placeholder="Find a chat by date"
                    onChange={this.updateSearch.bind(this)} />
                </div>
                <div>
                    <Paper style={{margin:10}}>  
                        <Grid container>
                        {detail}
                        </Grid>
                    </Paper>
                    
                </div>
            </div>
        )
    }


}
export default withStyles(styles)(HistoryList);

