// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL4WHdyXEaU-9I4M0Y75tEUaWXiYp1uwo",
  authDomain: "mahmoud-papa.firebaseapp.com",
  projectId: "mahmoud-papa",
  storageBucket: "mahmoud-papa.appspot.com",
  messagingSenderId: "221835315554",
  appId: "1:221835315554:web:1e84937e5ebfdbdff0043b",
  measurementId: "G-32E6K5S3B6"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
