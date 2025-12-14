// js/auth.js
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

/* 🔐 Keep user logged in after refresh */
await setPersistence(auth, browserLocalPersistence);

const provider = new GoogleAuthProvider();

/* ✅ GOOGLE LOGIN */
export async function googleLogin() {
  try {
    await signInWithPopup(auth, provider);
    // ❌ DO NOT redirect here
    // Let the page (index/dashboard) handle redirect
  } catch (error) {
    alert("Google sign-in failed");
    console.error(error);
  }
}

/* ✅ LOGOUT */
export async function logoutUser() {
  try {
    await signOut(auth);
    // page will redirect itself after auth state changes
  } catch (err) {
    console.error("Logout failed", err);
  }
}
