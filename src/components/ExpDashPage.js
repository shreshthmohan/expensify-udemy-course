import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';
import ExpensesSummary from './ExpensesSummary.js';

const ExpDashPage = () => {
    return (<div>
        <ExpenseListFilters />
        <ExpensesSummary />
        <ExpenseList />
    </div>
    );
};

export default ExpDashPage;
