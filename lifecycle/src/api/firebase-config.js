import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMbey-piQkWl0SctMXxwSrRa2RINQEaGk",
  authDomain: "forumproject-c4de0.firebaseapp.com",
  projectId: "forumproject-c4de0",
  storageBucket: "forumproject-c4de0.firebasestorage.app",
  messagingSenderId: "460081559498",
  appId: "1:460081559498:web:4b47ba216e794510d1c133"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };