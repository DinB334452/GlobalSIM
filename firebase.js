// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-G-m8KP7SquoFky4kNHg_Nmswb2QFL1M",
  authDomain: "globalsim-d7f8b.firebaseapp.com",
  projectId: "globalsim-d7f8b",
  storageBucket: "globalsim-d7f8b.firebasestorage.app",
  messagingSenderId: "775556523273",
  appId: "1:775556523273:web:2d7da52100bb574619dfd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Set persistence to local (keeps user logged in)
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Firebase Auth Persistence Enabled"))
  .catch((error) => console.error("Error setting persistence:", error));

// Expose Firebase Auth methods globally
window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.onAuthStateChanged = onAuthStateChanged;
window.signOut = signOut;
