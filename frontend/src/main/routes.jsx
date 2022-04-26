import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './AuthOrApp'
import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'

export default function Routes(props) {
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='billingCycle' component={BillingCycle} />
            <Route from="*" to="/" />
        </Switch>
    </div>
}