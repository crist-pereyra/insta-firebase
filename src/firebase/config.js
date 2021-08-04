import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDe0EyDRSWXM5_g74WGU840xYsrTWo0v3A",
    authDomain: "cristpreyra-firegram.firebaseapp.com",
    projectId: "cristpreyra-firegram",
    storageBucket: "cristpreyra-firegram.appspot.com",
    messagingSenderId: "629172599713",
    appId: "1:629172599713:web:c1bfefdb4bad882e98e9e0"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };