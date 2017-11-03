import ExpenseForm from './ExpenseForm.js'
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses.js'

const AddExpPage = (props) => {
    return (<div>
        <h1>Add expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
    );
};

export default connect()(AddExpPage);
