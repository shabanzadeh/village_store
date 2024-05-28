
import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_FIREBASE_APP_ID,
  measurementId: import.meta.env.REACT_FIREBASE_MEASUREMENT_ID
};

console.log(import.meta.env.REACT_APP_FIREBASE_API_KEY)
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth()
