import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase_init";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userdata, setuserdata] = useState([]);

  // create account with google

  const googleProvider = new GoogleAuthProvider();
  function createaccount() {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        setuserdata(res.user);
        // Show welcome toast with user's display name
        toast.success(`Welcome back, ${res.user.displayName}!`, {
          duration: 4000,
          position: "top-center",
          style: {
            background: "#4CAF50",
            color: "#fff",
            fontSize: "16px",
            padding: "16px 24px",
            borderRadius: "10px",
          },
          icon: "👋",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed. Please try again.");
      });
  }

  // AuthStateChange

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      setuserdata(user);
      console.log(user);
      //setloading(false);
    });

    return () => {
      unsubs();
    };
  }, []);

  // logout

  function logout() {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  const authInfo = {
    createaccount,
    userdata,
    logout

    // Add other auth-related states and functions here
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
