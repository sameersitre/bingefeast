 import React, { Component } from 'react'

 import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import setAuthToken from './utils/setAuthToken';

// Main Routes file
import Routes from './Routes';

// Importing Store file (Redux)
import Store from './Store';
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
     </Provider>
    )
  }
}


export default App;
