// Higher Order Component - HOC - A component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}/>
        </div>);
    };

};

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please Login</p>}
            </div>
        );
    };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



//ReactDOM.render(<AdminInfo isAdmin={true} info="SOMR info"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="SOMR info"/>, document.getElementById('app'))
