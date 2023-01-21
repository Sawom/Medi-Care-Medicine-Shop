// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBPMWaksL-QQ_20pLTX6fN0e9BItjncR2g",
  authDomain: "medicinesite.firebaseapp.com",
  projectId: "medicinesite",
  storageBucket: "medicinesite.appspot.com",
  messagingSenderId: "241962884602",
  appId: "1:241962884602:web:2f1450c0557f6ac98e1843",
  measurementId: "G-LEMQ0QSB6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;