import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import configureStore from './store/configureStore.js';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter.js';
import { addExpense, removeExpense, editExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';

const store = configureStore();

console.log('test');

// We provide store to all our components using 'Provider'
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
