import { storage } from './FiberBase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Upload file
const uploadFile = (file) => {
  const storageRef = ref(storage, file.name);
  return uploadBytes(storageRef, file);
};

// Get file URL
const getFileURL = (fileName) => {
  const storageRef = ref(storage, fileName);
  return getDownloadURL(storageRef);
};

export { uploadFile, getFileURL };
