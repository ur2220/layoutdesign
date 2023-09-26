import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCH2Mnlx5L8YIBMfA7C2ZumwnPq2kAuTmg",
  authDomain: "sign-in-64a92.firebaseapp.com",
  projectId: "sign-in-64a92",
  storageBucket: "sign-in-64a92.appspot.com",
  messagingSenderId: "562200131508",
  appId: "1:562200131508:web:0d7da64cd6feca5a1ea4e1",
  measurementId: "G-NGHLFPMDLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth,provider};