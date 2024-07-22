
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBwOF061BRwBuDMjjkPBF8HKrx20ZVvqgg",
    authDomain: "my-ecommerce-website-37a55.firebaseapp.com",
    projectId: "my-ecommerce-website-37a55",
    storageBucket: "my-ecommerce-website-37a55.appspot.com",
    messagingSenderId: "912712473237",
    appId: "1:912712473237:web:6c5fad0c399da89666599c",
    measurementId: "G-FJ71CHBWVX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized services to use in other parts of your app
export { auth, db, storage };