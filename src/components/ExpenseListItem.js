import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={'/edit/' + props.id}>Description: {props.description}</Link>
            <p>Amount: {numeral(props.amount).format('$0,0.00')}</p>
            <p>CreatedAt : {moment(props.createdAt).format('Do MMMM YYYY')}</p>
        </div>
    );
};

export default ExpenseListItem;
