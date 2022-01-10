// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpGCfxSy1A3ZMTJ_dY00kMfT0i7pFXnEs",
    authDomain: "merakilandia-8fa9c.firebaseapp.com",
    projectId: "merakilandia-8fa9c",
    storageBucket: "merakilandia-8fa9c.appspot.com",
    messagingSenderId: "458487955699",
    appId: "1:458487955699:web:d10f4236c071edd1e6f786",
    measurementId: "G-EV5TC9BV1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;