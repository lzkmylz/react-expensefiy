import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogIn = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
};