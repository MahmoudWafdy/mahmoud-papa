import { db } from './FiberBase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Add a new document
const addProduct = (product) => {
  return addDoc(collection(db, 'products'), product);
};

// Get all products
const getProducts = () => {
  return getDocs(collection(db, 'products'));
};

export { addProduct, getProducts };
