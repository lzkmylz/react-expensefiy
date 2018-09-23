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

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ LogInPage } exact={ true } />
                <Route path="/dashboard" component={ ExpenseDashboardPage } exact={true} />
                <Route path="/create" component={ AddExpensePage } />
                <Route path="/edit/:id" component={ EditExpensePage } />
                <Route path="/help" component={ HelpPage } />
                <Route component={ NotFoundPage } />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;