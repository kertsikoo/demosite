import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './components/Main'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <App />
    </Router>
  ), document.getElementById('root'));
  registerServiceWorker();
