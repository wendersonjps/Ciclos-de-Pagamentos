import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './App'
import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'

export default function Routes(props) {
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="billingCycle" component={BillingCycle} />
        </Route>
        <Redirect from="*" to="/" />
    </Router>
}