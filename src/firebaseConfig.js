// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfqe1qJYLbaX8GUVVAs0464Q8GODFI-A4",
  authDomain: "banking-app-main.firebaseapp.com",
  projectId: "banking-app-main",
  storageBucket: "banking-app-main.appspot.com",
  messagingSenderId: "137115452015",
  appId: "1:137115452015:web:1fe2f1aba83a8a453f439a"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);