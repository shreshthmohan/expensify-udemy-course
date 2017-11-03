import ExpenseList from './ExpenseList.js'
import ExpenseListFilters from './ExpenseListFilters.js'

const ExpDashPage = () => {
    return (<div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
    );
};

export default ExpDashPage;
