import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import configureStore from './store/configureStore.js';
import 'normalize.css/normalize.css';
import AppRouter, { history } from './routers/AppRouter.js';
import { startSetExpenses } from './actions/expenses.js';
import { login, logout } from './actions/auth.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase.js';
import './playground/promises.js';


const store = configureStore();

console.log('test');

// We provide store to all our components using 'Provider'
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

// startSetExpenses returns a promise?
// so how does store.dispatch pass it on??
// .then is chainable. this .then is because a .then was returned from
// the function returned by startSetExpenses
// from 'redux' source: 
// returns {Object} For convenience, the same action object you dispatched.
// thunk let dispatch a function.
// the return value of that function was a promise (chainable .then)
// now. since dispatch returns the same action object that we passed in,
// we can chain .then

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

