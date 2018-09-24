import { firebase, googleAuthProvider } from '../firebase/firebase';

export const logIn = (uid) => ({
    type: "LOGIN",
    uid
});

export const startLogIn = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logOut = () => ({
    type: "LOGOUT"
});

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    };
};