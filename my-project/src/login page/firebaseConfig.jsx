
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlTwFNyEB2AvmFkM2TcDVEbVK_oDKyYAE",
  authDomain: "amitlogin-198c8.firebaseapp.com",
  databaseURL: "https://amitlogin-198c8-default-rtdb.firebaseio.com",
  projectId: "amitlogin-198c8",
  storageBucket: "amitlogin-198c8.appspot.com",
  messagingSenderId: "410912413561",
  appId: "1:410912413561:web:05d6939771b1e5957901a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
