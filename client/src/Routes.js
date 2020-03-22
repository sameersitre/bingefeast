/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */
import React from 'react';
import { Route, Switch, withRouter, Redirect, BrowserRouter } from 'react-router-dom';

import Appbar from './components/Appbar/Appbar';
import Dashboard from './components/dashboard/Dashboard';
import TVShows from './components/tvshows/TVShows.js';
import MovieDetails from './components/movieDetails/MovieDetails';

const Routes = () => (
    <div>
        <Appbar />
        <Switch style={{ position: 'absolute', }}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/tvshows" component={TVShows} />
            <Route exact path="/moviedetails" component={MovieDetails} />
            <Route exact path="/tvshowdetails" component={MovieDetails} />
            {/* <Redirect from='*' to='/' /> */}
        </Switch>
    </div>
);
// export default Routes;
export default withRouter(Routes);
