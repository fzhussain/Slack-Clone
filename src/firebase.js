// Backend connection with firebase

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc0ab4a_MAat-R7-QJEYeHxrze2UW8xYo",
  authDomain: "slack-clone-e6bf8.firebaseapp.com",
  projectId: "slack-clone-e6bf8",
  storageBucket: "slack-clone-e6bf8.appspot.com",
  messagingSenderId: "522583589184",
  appId: "1:522583589184:web:855866a2ffa7ffa2c07aa5",
  measurementId: "G-31VL5V12MX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
// Since, we will be using db object in many files
