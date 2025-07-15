import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSh1o4FnZXjRZBfHC6PDsubP8dQRctodg",
  authDomain: "my-portfolio-3b882.firebaseapp.com",
  projectId: "my-portfolio-3b882",
  storageBucket: "my-portfolio-3b882.firebasestorage.app",
  messagingSenderId: "842700692571",
  appId: "1:842700692571:web:21875b312cb56ccef9b37e",
  measurementId: "G-V163CFVFXS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };