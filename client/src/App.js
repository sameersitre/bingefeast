/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import React, { Component } from 'react'

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
        <BrowserRouter
        // forceRefresh={false}
        // basename={process.env.PUBLIC_URL}
        >
          <Routes />
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
