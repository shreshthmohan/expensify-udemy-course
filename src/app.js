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

console.log(store.getState());

store.dispatch(addExpense({
    description: 'water bill',
    amount: 5000
}));
store.dispatch(addExpense({
    description: 'gas bill',
    amount: 10000,
    createdAt: 2000
}));
store.dispatch(addExpense({
    description: 'rent  bill',
    amount: 15000,
    createdAt: 1000
}));

console.log(store.getState());

//store.dispatch(setTextFilter('water'));

//setTimeout(() => {
//    store.dispatch(setTextFilter('bill'));
//},4000);

console.log(store.getState());
const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

//ReactDOM.render(<AppRouter />, document.getElementById('app'));


// We provide store to all our components using 'Provider'
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
