import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js'
import selectExpenses from '../selectors/expenses.js'

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List </h1>
            {props.expenses.map((expense) => {
                return (
                    <ExpenseListItem key={expense.id} {...expense}/>
                );
            })}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//connect accepts a function that will return an object, which will then be
// accessible in the wrapped component (ExpenseList here)
// But, why could we not have directly passed ...state or such?
export default connect(mapStateToProps)(ExpenseList); 

// when a component is connected to redux store using react-redux
// the component is reactive, rerenders upon state update

// connect will return a higher order component
// it lets ExpenseList access to the object that is passed through
//const ConnectedExpenseList = connect((state) => {
//    return {
//        expenses: state.expenses
//    };
//})(ExpenseList); 
//
//export default ConnectedExpenseList;
