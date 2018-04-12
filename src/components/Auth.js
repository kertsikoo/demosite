import React from 'react';
import App from '../App.js';
import { Link, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class Login extends React.Component {

    render() {
        return (
            
            <div>
                <Link to="/main">Go to the stats portal</Link> 
                <Route path="/main" component={() => <BrowserRouter><App/></BrowserRouter>}/>
            </div>
        )
    }
}

export default Login;

//<App />
