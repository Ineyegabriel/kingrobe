import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPBD2c7RLiaYnFqfpeAoY5DKA2DQmwXkI",
    authDomain: "crowndb-8a2b0.firebaseapp.com",
    databaseURL: "https://crowndb-8a2b0.firebaseio.com",
    projectId: "crowndb-8a2b0",
    storageBucket: "",
    messagingSenderId: "943613070938",
    appId: "1:943613070938:web:834791d7e24ab156"
};
firebase.initializeApp(firebaseConfig);
/*Function for saving user data gotten back from google sign in*/
export const createUserProfileDocument = async (userDetailsfromOauth, AdditionalData) =>{
    if(!userDetailsfromOauth) return;
    const userRef = firestore.doc(`users/${userDetailsfromOauth.uid}`);
    const userSnapshot = await userRef.get();
    if(!userSnapshot.exists){
        const {displayName, email,} = userDetailsfromOauth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...AdditionalData
            })
        }
        catch(error) {
            console.log('Oops ! Error creating user', error.message);
        }
    }
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;