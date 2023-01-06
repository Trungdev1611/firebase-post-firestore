// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNLBcPttO_sfbjuBBBp_0f9cjZC2DpXYE",
  authDomain: "blogpost-firestore.firebaseapp.com",
  projectId: "blogpost-firestore",
  storageBucket: "blogpost-firestore.appspot.com",
  messagingSenderId: "289584578786",
  appId: "1:289584578786:web:dfd81576817c453cc0debb",
  measurementId: "G-2GLJD51Y3N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
