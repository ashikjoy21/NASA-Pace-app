// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const FirebaseConfig = {
    apiKey: "AIzaSyDEBf49pHOB6NvfmIOgwtFFVKchJ66FZnE",
    authDomain: "nasa-pace-edu.firebaseapp.com",
    projectId: "nasa-pace-edu",
    storageBucket: "nasa-pace-edu.appspot.com",
    messagingSenderId: "872006329053",
    appId: "1:872006329053:web:1d84c4fcd27f5257beb134",
    measurementId: "G-10HK1MF6C9"
  };

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

//export { db, auth };
