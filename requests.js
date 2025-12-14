import { auth, db } from "./firebase.js";
import {
  addDoc, collection, serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

export async function sendRequest(toUid) {
  await addDoc(collection(db, "requests"), {
    fromUid: auth.currentUser.uid,
    toUid,
    status: "pending",
    createdAt: serverTimestamp()
  });
  alert("Request sent");
}
