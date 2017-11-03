import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpDashPage from '../components/ExpDashPage.js'
import AddExpPage from '../components/AddExpPage.js'
import EditPage from '../components/EditPage.js'
import HelpPage from '../components/HelpPage.js'
import NotFound from '../components/NotFound.js'
import Header from '../components/Header.js'


const AppRouter = () => {
    return (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ExpDashPage} exact={true}/>
                <Route path='/create' component={AddExpPage}/>
                <Route path='/edit/:id' component={EditPage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div> 
    </BrowserRouter>
)};

export default AppRouter;
