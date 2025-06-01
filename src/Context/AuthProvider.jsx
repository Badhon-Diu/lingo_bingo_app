import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase_init";
import toast from "react-hot-toast";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userdata, setuserdata] = useState([]);

  // create account with google

  const googleProvider = new GoogleAuthProvider();
  function createaccount() {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
    
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
      
        toast.error("Login failed. Please try again.");
      });
  }

  // AuthStateChange

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      setuserdata(user);
     
      //setloading(false);
    });

    return () => {
      unsubs();
    };
  }, []);

  // logout

  function logout() {
    signOut(auth)
     
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
