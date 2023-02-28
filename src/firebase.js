// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnLSXUMEyUYqMQN6w47K_LKKziH85M3Kw",
  authDomain: "aeromarine-4c2d0.firebaseapp.com",
  projectId: "aeromarine-4c2d0",
  storageBucket: "aeromarine-4c2d0.appspot.com",
  messagingSenderId: "627367156891",
  appId: "1:627367156891:web:7945aef37b551647687a3e",
  measurementId: "G-LG9MRCMXZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app;
