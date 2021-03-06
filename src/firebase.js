import firebase from "firebase/compat/app";
import "firebase/compat/database";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVSyviEu7x9YJkEI9GDBnsBJrQp5FGi4Y",
    authDomain: "fir-project-da4b7.firebaseapp.com",
    projectId: "fir-project-da4b7",
    storageBucket: "fir-project-da4b7.appspot.com",
    messagingSenderId: "23752169548",
    appId: "1:23752169548:web:90b05568146b715c053ce9"
  };
const fireDb= firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();

export const db = getFirestore(fireDb);
export const auth = getAuth(fireDb);
export const provider = new GoogleAuthProvider();