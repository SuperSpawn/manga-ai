import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBc_6xeZzmwOOr2awRdaq_j3PzyWUhrRnc",
    authDomain: "manga-ai-7a859.firebaseapp.com",
    projectId: "manga-ai-7a859",
    storageBucket: "manga-ai-7a859.appspot.com",
    messagingSenderId: "625960315997",
    appId: "1:625960315997:web:35ffa0ea9626f6389771b4",
    measurementId: "G-SKNLVFZD1Y"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Login = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          console.log("User is logged in:", user);
        } else {
          console.log("User is logged out");
        }
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Login;
