import expensesTotal from '../selectors/expenses-total.js';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses.js';


const ExpensesSummary = (props) => {
    return (
        <div>
          {'showing ' + props.expensesCount + ' expense' + (props.expensesCount === 1 ? '' : 's') + ' totalling ' + props.expensesTotal}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters))
    };
};



export default connect(mapStateToProps)(ExpensesSummary); 

// what all do we need?
// expensestotal function import
// connect will let us access the state
// state will be passed into selectexpenses?
// result of selectexpenses to expenses total
// also use result of selectexpenses to find count
