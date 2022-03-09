import {
  createUserWithEmailAndPassword, getAuth, updateProfile
} from "firebase/auth";
import { useState } from 'react';
import initializeFirebase from "../Firebase/firebase.init";
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const auth = getAuth();
  auth.useDeviceLanguage();
  // create user with email
  const createUserByEmail = (email, password, name) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: null,
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    error,
    setError,
    loading,
    setIsLoading,
    createUserByEmail,
  };
};

export default useFirebase;