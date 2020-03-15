/*
  * Author: Sameer Sitre
  * https://www.linkedin.com/in/sameersitre/
  * https://github.com/sameersitre
  * File Description:  
 */

import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// import Auth from './hoc/Auth';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import ForgotPassword from './components/authentication/forgotPassword/ForgotPassword';

import Appbar from './components/Appbar/Appbar';
import Dashboard from './components/dashboard/Dashboard';

import TVShows from './components/tvshows/TVShows.js';
import MovieDetails from './components/movieDetails/MovieDetails';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Appbar />
        <Switch style={{ position: 'absolute', }}>
            <Route
                exact
                path="/register"
                name="Register"
                component={Register}
            //   component={Auth(Register, false)}
            />
            <Route exact path="/login" name="Login" component={Login} />
            <Route
                exact
                path="/forgotpassword"
                name="Forgot Password"
                component={ForgotPassword}
            //   component={Auth(ForgotPassword, false)}
            />
            <Route exact path="/" name="Dashboard" component={Dashboard} />
            <Route exact path="/inMovie-webapp/" name="Dashboard" component={Dashboard} />
            <Route  path="/tvshows" name="TVshows" component={TVShows} />

            <Route  path="/moviedetails" name="MovieDetails" component={MovieDetails} />
            <Route exact path="/tvshowdetails" name="TVShowDetails" component={MovieDetails} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
