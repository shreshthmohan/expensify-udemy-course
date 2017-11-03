import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={'/edit/' + props.id}>Description: {props.description}</Link>
            <p>Amount: {props.amount}</p>
            <p>CreatedAt : {props.createdAt}</p>
        </div>
    );
};

export default ExpenseListItem;
