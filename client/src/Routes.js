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
// PCMP Routes

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Appbar />
        <div style={{ position: 'absolute', }}>


            <Switch>
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
                <Route exact path="/tvshows" name="TVshows" component={TVShows} />

                <Route exact path="/moviedetails" name="MovieDetails" component={MovieDetails} />
                <Route exact path="/tvshowdetails" name="TVShowDetails" component={MovieDetails} />



            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;
