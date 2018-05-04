import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HomeLayout, LoginLayout } from '../pages';

const landingPages = [
    '/login',
    '/register',
    '/reset-password',
    '/forgot-password',
    '/not-found',
];

const Routes = () => (
    <Switch>
        {landingPages.map(r => 
            <Route key={`base-route-${r}`} path={r} component={LoginLayout} />
        )}
        <Route path="/" component={HomeLayout} />
        <Route render={() => <Redirect to="/not-found" />} />
    </Switch>
);

export default Routes;