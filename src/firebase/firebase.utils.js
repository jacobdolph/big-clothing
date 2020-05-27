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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    console.log(snapShot)

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;