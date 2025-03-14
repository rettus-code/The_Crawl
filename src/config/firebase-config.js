// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz5BEzkX5vCf9gNknYd61KszpsvBFNK14",
  authDomain: "the-crawl-4f9d6.firebaseapp.com",
  projectId: "the-crawl-4f9d6",
  storageBucket: "the-crawl-4f9d6.firebasestorage.app",
  messagingSenderId: "274548076495",
  appId: "1:274548076495:web:447706531e45eed2696cba",
  measurementId: "G-C1SZ7RHVCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);