import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB3I5lzES6k1AVIWQJhrlcqt7Ua9UC_GOE",
    authDomain: "chatapp-7da5f.firebaseapp.com",
    projectId: "chatapp-7da5f",
    storageBucket: "chatapp-7da5f.appspot.com",
    messagingSenderId: "486000066645",
    appId: "1:486000066645:web:a255e5970e5462dca854dc"
  }).auth();
