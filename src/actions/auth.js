import { firebase, googleAuthProvider } from '../firebase/firebase.js';

export const login = (uid) => {
    return {
        type: 'LOGIN',
        uid: uid
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
