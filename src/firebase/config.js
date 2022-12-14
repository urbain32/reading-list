import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhapL53R4Ra-j2nAWnOJle40EMMgiodek",
  authDomain: "readinglistapp-6b956.firebaseapp.com",
  projectId: "readinglistapp-6b956",
  storageBucket: "readinglistapp-6b956.appspot.com",
  messagingSenderId: "1043296292513",
  appId: "1:1043296292513:web:ce315373b02ded1945eae0",
};

// init firebase
initializeApp(firebaseConfig);
// init firestore
const db = getFirestore();
export { db };
