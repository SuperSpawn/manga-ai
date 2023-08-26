import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH19svP8tPqsJbGvlB5aoWBx0vLpOLhSI",
  authDomain: "manga-ai-79580.firebaseapp.com",
  projectId: "manga-ai-79580",
  storageBucket: "manga-ai-79580.appspot.com",
  messagingSenderId: "751826354778",
  appId: "1:751826354778:web:49f825a4d5be0b41058e63",
  measurementId: "G-NNJK0ZQQ9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
