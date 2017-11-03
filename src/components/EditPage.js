import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { editExpense, removeExpense } from '../actions/expenses.js';

const EditPage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(props);
                    console.log(expense)
                    const expWithId = {id: props.expense.id, updates: expense};
                    props.dispatch(editExpense(expWithId));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');
            }}>
                Remove Expense
            </button>
        </div>
    );
};

// The results of mapStateToProps must be a plain object,
// which will be merged into the component’s props 
const mapiStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };

}

export default connect(mapiStateToProps)(EditPage);
