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
        const {displayName, email} = userDetailsfromOauth;
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
export const getCurrentUser = () => {
    return new Promise((resolve, reject) =>{
        const unsubscribe = auth.onAuthStateChanged(userAuth =>{
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}
export const addDocumentandCollection = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

 export const convertSnapShottoMappableArray = collectionSnapshot =>{
   const transformedCollection = collectionSnapshot.docs.map(docSnapshot =>{
       const {title, items} = docSnapshot.data();
       return {
           routeName: encodeURI(title.toLowerCase()),
           id: docSnapshot.id,
           title,
           items,
       };
   });
   /* Converting array into objects*/
   return transformedCollection.reduce((accumulator, collection) => {
       accumulator[collection.title.toLowerCase()] = collection;
       return accumulator;
   },{})
 };
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export default firebase;