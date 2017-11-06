import uuid from 'uuid';
import database from '../firebase/firebase.js';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense: expense
    };
};

// expenseData is recieved from the user
// setting expenseData to an empty object is nothing is passed in
export const startAddExpense = (expenseData = {}) => {
    // we return a function to redux
    // the function will call dispatch
    return (dispatch) => {
        // destructuring expenseData and setting defaults for each property
        const {
            description = '',
            amount = 0,
            note = '',
            createdAt = 0
        } = expenseData;

        // saving data to firebase 
        // shorthand for when the property and value are of the same name
        const expense = { description, amount, note, createdAt };

        // push returns a thenable reference which has a key property
        // dispatch to store after data is saved to firebase
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({id: ref.key, ...expense}));
        });
    };
};


export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: id
        }
    };
};

export const startRemoveExpense = ({id}) => {
    return (dispatch) => {
        return database.ref('expenses/' + id).remove().then(() => {
            dispatch(removeExpense({id}));
        });
    };
};

export const editExpense = ({id, updates}) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    };
};

export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses: expenses
    };
};

// set store equal to values in firebase
// 1. fetch all expense data once 
// 2. parse data into array
// 3. dispatch setExpenses
//
// How does this function have access to dispatch?
// Thanks to thunk?
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};
