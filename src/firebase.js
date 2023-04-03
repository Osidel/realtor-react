// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu89KHflw8AGnUIy0iWlWpXzfA5Arb7ZQ",
  authDomain: "realtor-react-841c5.firebaseapp.com",
  projectId: "realtor-react-841c5",
  storageBucket: "realtor-react-841c5.appspot.com",
  messagingSenderId: "991600016147",
  appId: "1:991600016147:web:71aa9aaaba9cb0a95ab8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()