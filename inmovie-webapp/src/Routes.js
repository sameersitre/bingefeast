import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Auth from './hoc/Auth';

// Authentication Routes
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';
import ForgotPassword from './components/authentication/forgotPassword/ForgotPassword';
import Dashboard from './components/dashboard/Dashboard';
// PCMP Routes

const Routes = () => (
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

    </Switch>
);

export default Routes;
