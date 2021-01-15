// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" ;

const firebaseConfig = {
    apiKey: "AIzaSyDgf3cIZSSHACEAsXtIbYMo7FIWqcrqVig",
    authDomain: "indiamart-5e9a0.firebaseapp.com",
    projectId: "indiamart-5e9a0",
    storageBucket: "indiamart-5e9a0.appspot.com",
    messagingSenderId: "239116270100",
    appId: "1:239116270100:web:6e7d2d22e75fe73c1a0501",
    measurementId: "G-G22MN0HE6S"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db,auth};