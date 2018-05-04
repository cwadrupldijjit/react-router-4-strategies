import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './LoginLayout.css';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';

class LoginLayout extends Component {
    render() {
        return (
            <div className="login-layout">
                <Route path="/">
                    {({ match }) => [
                        <Route key="/login" path="/login" component={Login} />,
                        <Route key="/not-found" path="/not-found" component={NotFound} />,
                    ]}
                </Route>
            </div>
        );
    }
}

export default LoginLayout;