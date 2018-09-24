import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LogInPage from '../components/LogInPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
                <Route path="/" component={ LogInPage } exact={ true } />
                <PrivateRoute path="/dashboard" component={ ExpenseDashboardPage } exact={true} />
                <PrivateRoute path="/create" component={ AddExpensePage } />
                <PrivateRoute path="/edit/:id" component={ EditExpensePage } />
                <Route path="/help" component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;