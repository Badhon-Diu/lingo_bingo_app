// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFwGRqdFQIitUHDbg1o0BCAXnbObmiq2k",
  authDomain: "language-app-63679.firebaseapp.com",
  projectId: "language-app-63679",
  storageBucket: "language-app-63679.firebasestorage.app",
  messagingSenderId: "360074927956",
  appId: "1:360074927956:web:4a5a45e95121ddccbe32c1",
  measurementId: "G-W1PN2MJEE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
