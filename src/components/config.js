import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA16-pBOP09LQXKmFSubQhz9oY-kAfUXlc",
  authDomain: "crypt-track-39cc0.firebaseapp.com",
  projectId: "crypt-track-39cc0",
  storageBucket: "crypt-track-39cc0.appspot.com",
  messagingSenderId: "596573610688",
  appId: "1:596573610688:web:97b4eb82499fa8c2208325",
  measurementId: "G-H4C7R051J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider}