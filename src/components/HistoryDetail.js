import React from 'react';
import { Paper, Divider, Button } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid/Grid';

const styles = theme => ({
    chatList: {
        margin: 20,
        paddign: 20
    }
})

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            isOpen: false };
        this.localToggle=this.localToggle.bind(this);
      }
      localToggle(){
        this.setState({ isOpen: !this.state.isOpen });
      }
    render() {
        const { classes } = this.props;
        const detailComponent = this.state.isOpen ? <Paper elevation={1} style={{padding:10}}>
        {this.props.conversation}
        <br/><br/>
        Length: {this.props.length}
        </Paper> : null;
        
        return (
        <Grid container className={classes.chatList}>
        <Grid item xs={4}>
            <Divider style={{width: '70%'}}/>
            <Button onClick={this.localToggle}>
            Show conversation by {this.props.agent}
            </Button>
        </Grid>
        <Grid item xs >
          {detailComponent}
        </Grid>
        </Grid>
        )
    }
}

export default withStyles(styles)(Detail);
