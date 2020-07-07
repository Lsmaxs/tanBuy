import React from 'react';
import { Router, Route } from 'react-router';
import asyncComponent from 'components/asyncComponents';
import index from './page/Main/main';
const createHistory = require('history').createBrowserHistory;

const history = createHistory();

const categories = asyncComponent(() => import("./page/Categories/categories"));
const user = asyncComponent(() => import("./page/User/user"));


const RouteConfig = (
    <Router path="/" history={history}>
        <>
            <Route path="/"  exact component={index} />
            <Route path="/categories" component={categories} />
            <Route path="/user" component={user} />  
        </>
    </Router>
);
export default RouteConfig;
