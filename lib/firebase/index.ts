// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_fmpVL5xfxaE3_lLKED_oBfpItgLy4JQ",
  authDomain: "nextjs-chat-app-e2da8.firebaseapp.com",
  projectId: "nextjs-chat-app-e2da8",
  storageBucket: "nextjs-chat-app-e2da8.appspot.com",
  messagingSenderId: "49481938996",
  appId: "1:49481938996:web:e6c6bfbca871e78b47f261",
  measurementId: "G-GDLG2TNYFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export { app, googleProvider, auth };
