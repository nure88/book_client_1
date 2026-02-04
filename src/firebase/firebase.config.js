//Firebase project name Main-Book-Libray

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDdZt9n4wgglEdo0agIEingxFUnr11wTM",
  authDomain: "main-book-libray.firebaseapp.com",
  projectId: "main-book-libray",
  storageBucket: "main-book-libray.firebasestorage.app",
  messagingSenderId: "962329446187",
  appId: "1:962329446187:web:726a3608291fb2dfff276e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);