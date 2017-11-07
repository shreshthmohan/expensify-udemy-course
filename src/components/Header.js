import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth.js';

const Header = (props) => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink activeClassName="is-active" to="/dashboard">Go Home</NavLink>
            <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
            <button onClick={() => {
                props.dispatch(startLogout());
            }}>Logout</button>
        </header>
    );
};

export default connect()(Header);
