import React from 'react';
import Main from './components/Main'
//import Login from './components/Login'
import Button from 'material-ui/Button'
//import { withStyles } from 'material-ui/styles';
//import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { Paper } from 'material-ui';
import Typography from 'material-ui/Typography';


function View(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Main/>;
  }
  return null;
}

function LoginButton(props) {
  const styles = ({
    root: {
      height: 200,
      width: 200,
      padding: 50,
      margin: '0 auto',
      marginTop: 50,
      textAlign: 'center',
    },
    input: {
      margin: 10
    }
  });

  return (
            <Paper style={styles.root}>
              <Typography variant="title">LOG IN</Typography>
                <form>
                    <TextField type="text"  label="Username" required style={styles.input}></TextField>
                    <TextField type="password"  label="Password"  required style={styles.input}></TextField>
                    <Button variant="raised" size="large" color="primary" onClick={props.onClick} style={styles.input}>
                      Login
                    </Button>  
                </form>
            </Paper>
    
  );
}

function LogoutButton(props) {
  const styles = {
    input: {
      float: 'right' 
    }
  }

  return (
    <Button  onClick={props.onClick} style={styles.input} color="default">
    Logout
  </Button>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick() {
    setTimeout(() => {this.setState({isLoggedIn: true})}, 2000);
  }

  handleLogoutClick() {
    setTimeout(() => {this.setState({isLoggedIn: false})}, 500);
  }
  
  render(){
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
        <div>
           <View isLoggedIn={isLoggedIn}/> 
           {button}
        </div>
    )
  }
}





export default App;
