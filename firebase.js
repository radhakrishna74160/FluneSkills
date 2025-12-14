import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjbMbWEpKdcJTLU1FYr3NO3_Otq9rg8y8",
  authDomain: "flune-7ff81.firebaseapp.com",
  projectId: "flune-7ff81",
  storageBucket: "flune-7ff81.firebasestorage.app",
  messagingSenderId: "988333109920",
  appId: "1:988333109920:web:5c868d34de368ff77fcfc5",
  measurementId: "G-Y8KXDNK2CY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

