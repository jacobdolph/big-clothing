import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDDsNQko9QMhQo7Nb5jXXk_NjnYAG45sP0",
    authDomain: "big-db.firebaseapp.com",
    databaseURL: "https://big-db.firebaseio.com",
    projectId: "big-db",
    storageBucket: "big-db.appspot.com",
    messagingSenderId: "1045443647688",
    appId: "1:1045443647688:web:fc7b3da0978a2441b46dfd",
    measurementId: "G-DPB84SG7ET"
};


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;