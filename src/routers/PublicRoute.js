import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header.js';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <div>
            <Route {...rest} component={(props) => {
                return (
                    isAuthenticated ?
                    (<Redirect to="/dashboard" />)
                    :
                    (
                        <div>
                          <Component {...props} />
                        </div>
                    )
                );
            }}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    };
};

export default connect(mapStateToProps)(PublicRoute);
