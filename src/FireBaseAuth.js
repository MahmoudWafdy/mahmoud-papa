import { auth } from './FiberBase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Sign up
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Sign in
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Sign out
const signOutUser = () => {
  return signOut(auth);
};

export { signUp, signIn, signOutUser };
