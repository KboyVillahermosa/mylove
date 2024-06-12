// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsQPrgA3JNLJe91HxPpre6EHukAiwJEas",
  authDomain: "mylove-323f1.firebaseapp.com",
  projectId: "mylove-323f1",
  storageBucket: "mylove-323f1.appspot.com",
  messagingSenderId: "176300521027",
  appId: "1:176300521027:web:b158f0f9cef82584c586f6",
  measurementId: "G-9KQ9VWDT1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);