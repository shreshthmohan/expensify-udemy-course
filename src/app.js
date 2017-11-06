import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import configureStore from './store/configureStore.js';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter.js';
import { startSetExpenses } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';
import './firebase/firebase.js';
import './playground/promises.js';


const store = configureStore();

console.log('test');

// We provide store to all our components using 'Provider'
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

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
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
}).then(() => {
    console.log('testing functionaliy of then. should print after render')
});



