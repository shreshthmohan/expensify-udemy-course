import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Action generator - a function to return an action object
// to avoid typos and ease of repeatability




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const exp1 = store.dispatch(addExpense({
    description: 'rent',
    amount: 300,
    createdAt: 150
})); 
const exp2 = store.dispatch(addExpense({
    description: 'coffee',
    amount: 100,
    createdAt: 1500
})); 
// 
// store.dispatch(removeExpense({id: exp1.expense.id}));
// 
// store.dispatch(editExpense({
//     id: exp2.expense.id,
//     updates : {
//         amount: 500
//     }
// }));
// 
//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// 
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());

