import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState<[] | {} | null>([]);
  const [error, setError] = useState("");

  const auth = getAuth();

  //   create user with email and password
  const createUserByEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  console.log(typeof createUserByEmail);

  // login user with email and password
  const loginUserByEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // managing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser({});
        console.log(user);
      }
    });
    return () => unsubscribe();
  }, []);

  //   sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        //   sign out successfully
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    createUserByEmail,
    signOutUser,
    loginUserByEmail,
  };
};
export default useFirebase;