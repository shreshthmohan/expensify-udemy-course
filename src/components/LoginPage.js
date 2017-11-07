import react from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth.js';

const LoginPage = (props) => {
    return (
        <button onClick={() => {
            props.dispatch(startLogin());
        }}>Login</button>
    );
};

export default connect()(LoginPage);
