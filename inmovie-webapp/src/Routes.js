import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// import Auth from './hoc/Auth';


import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import ForgotPassword from './components/authentication/forgotPassword/ForgotPassword';

import Appbar from './components/Appbar/Appbar';
import Dashboard from './components/dashboard/Dashboard';
import MovieDetails from './components/movieDetails/MovieDetails';
// PCMP Routes

const Routes = () => (
    <BrowserRouter>
        <Appbar />
        <div style={{ position: 'absolute',  }}>

       
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
            <Route exact path="/movieDetails" name="MovieDetails" component={MovieDetails} />

        </Switch>
         </div>
    </BrowserRouter>
);

export default Routes;
