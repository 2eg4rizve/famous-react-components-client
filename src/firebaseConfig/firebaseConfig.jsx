
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRkQw6s2jjcU4Q8DWsssKxPBbKtmx4Gtg",
  authDomain: "famousreactcomponents.firebaseapp.com",
  projectId: "famousreactcomponents",
  storageBucket: "famousreactcomponents.appspot.com",
  messagingSenderId: "244574743207",
  appId: "1:244574743207:web:a310e90efe72902d138982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);