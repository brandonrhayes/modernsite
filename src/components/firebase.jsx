// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT7ZJ9JuNSeHBBkD7b4JxNfmsyTo2tmxU",
  authDomain: "modernsite-6ce0d.firebaseapp.com",
  projectId: "modernsite-6ce0d",
  storageBucket: "modernsite-6ce0d.appspot.com",
  messagingSenderId: "88955700318",
  appId: "1:88955700318:web:ef9fc87e8c994565afe0cf",
  measurementId: "G-6RW2JESE0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);