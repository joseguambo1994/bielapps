import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-acAxcmLwIuZjSbV7hLemE9OU7KpOTA4",
  authDomain: "bielapps-31529.firebaseapp.com",
  projectId: "bielapps-31529",
  storageBucket: "bielapps-31529.appspot.com",
  messagingSenderId: "78580705299",
  appId: "1:78580705299:web:e16b923fa69d4f84c8b7e6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db } 