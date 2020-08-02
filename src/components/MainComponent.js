import React, { Component } from 'react';
import Home from './HomeComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    render() {
        return(
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/home" />
            </Switch>
        );
    }
}

export default Main;