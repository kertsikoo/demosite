import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

ReactDOM.render((
  <ApolloProvider client={client}>
  <Router>
    <Main />
    </Router>
    </ApolloProvider>
  ), document.getElementById('root'));
  registerServiceWorker();
