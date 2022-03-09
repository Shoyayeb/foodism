import {
  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile
} from "firebase/auth";
import { useEffect, useState } from 'react';
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

  // managing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
        console.log("Sign out success");
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
    signOutUser,
  };
};

export default useFirebase;