import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASeeaLrayF77cX_5SKVGgM28JbEO45J_U",
  authDomain: "workout-8ddf6.firebaseapp.com",
  projectId: "workout-8ddf6",
  storageBucket: "workout-8ddf6.appspot.com",
  messagingSenderId: "1009896020786",
  appId: "1:1009896020786:web:116e5b3b363a100d6c952b",
  measurementId: "G-PF71F1B5VC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
