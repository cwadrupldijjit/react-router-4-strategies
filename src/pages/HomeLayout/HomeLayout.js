import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './HomeLayout.css';
import Home from './Home/Home';

class HomeLayout extends Component {
    render() {
        return (
            <div className="home-layout">
                <div className="header">
                    
                </div>
                
                <Route path={`${this.props.match.url}home`} exact component={Home} />
            </div>
        );
    }
}

export default HomeLayout;