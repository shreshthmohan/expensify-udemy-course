import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import ExpDashPage from '../components/ExpDashPage.js';
import AddExpPage from '../components/AddExpPage.js';
import EditPage from '../components/EditPage.js';
import HelpPage from '../components/HelpPage.js';
import NotFound from '../components/NotFound.js';
import LoginPage from '../components/LoginPage.js';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute.js';

export const history = createHistory();

const AppRouter = () => {
    return (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ExpDashPage}/>
                <PrivateRoute path='/create' component={AddExpPage}/>
                <PrivateRoute path='/edit/:id' component={EditPage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div> 
    </Router>
)};

export default AppRouter;
