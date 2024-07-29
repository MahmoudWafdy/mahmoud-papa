import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL4WHdyXEaU-9I4M0Y75tEUaWXiYp1uwo",
  authDomain: "mahmoud-papa.firebaseapp.com",
  projectId: "mahmoud-papa",
  storageBucket: "mahmoud-papa.appspot.com",
  messagingSenderId: "221835315554",
  appId: "1:221835315554:web:1e84937e5ebfdbdff0043b",
  measurementId: "G-32E6K5S3B6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Use device language for auth
auth.useDeviceLanguage();

// Export Firebase services
export { auth, db };

// Export Firebase auth functions
export const signInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const createUserWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return auth.signOut();
};
