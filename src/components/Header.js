import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink activeClassName="is-active" to="/" exact={true}>Go Home</NavLink>
            <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
            <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        </header>
    );
};

export default Header;
