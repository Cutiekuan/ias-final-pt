// src/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm-ecfVKpIZXhGJhC4Eo7HThQ0kLLUe-M",
  authDomain: "final-pt-e23d6.firebaseapp.com",
  projectId: "final-pt-e23d6",
  storageBucket: "final-pt-e23d6.appspot.com",
  messagingSenderId: "434775191238",
  appId: "1:434775191238:web:84e2b3cd577d5422d1b1c7",
  measurementId: "G-ZQYYQYMWZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Auth and Firestore instances
