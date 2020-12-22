import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDzQ9BAhPoPNjZHUNYjbIczTFfekEVQWV4",
    authDomain: "commercial-a2545.firebaseapp.com",
    projectId: "commercial-a2545",
    storageBucket: "commercial-a2545.appspot.com",
    messagingSenderId: "403300263804",
    appId: "1:403300263804:web:670e5c404c50e4c251e6f9",
    measurementId: "G-ER5MFP2ML1"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;