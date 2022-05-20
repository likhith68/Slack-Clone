// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjgF09u_1EOMG42ZB9WYc40BJ5LTPOJ1E",
    authDomain: "slack-clone-d9e34.firebaseapp.com",
    projectId: "slack-clone-d9e34",
    storageBucket: "slack-clone-d9e34.appspot.com",
    messagingSenderId: "899565818651",
    appId: "1:899565818651:web:983252e9ff2fd96beef9be",
    measurementId: "G-TVYYZRJ94H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;