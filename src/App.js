import React from 'react';
import './App.css';
import Layout from './components/layout/layout'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
  });




class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">  
          <Layout />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
