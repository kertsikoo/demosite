import React from 'react';
import Main from './Main'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Link, Route } from 'react-router-dom'

const styles = theme => ({
  root: {
    height: 200,
    width: 200,
    padding: 50,
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center'
  },
  input: {
    margin: 10
  }
});


class Login extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }



  render(){
    const { classes } = this.props;
    return (
        <div>
            <Paper className={classes.root}>
              <Typography variant="title">LOG IN</Typography>
                <form>
                  <label>
                    <TextField type="text" ref="username" label="Username" className={classes.input} required></TextField>
                    <TextField type="password" ref="password" label="Password" className={classes.input} required></TextField>
                     </label>
                </form>
            </Paper>
          </div>
    )
  }
}

export default withStyles(styles)(Login);