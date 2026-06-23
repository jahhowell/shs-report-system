import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC7DmpN682PT__RhPkgRu2_wxpOclKow",
  authDomain: "shs-report-system.firebaseapp.com",
  projectId: "shs-report-system",
  storageBucket: "shs-report-system.appspot.com",
  messagingSenderId: "381807513816",
  appId: "1:381807513816:web:e826c08bed6538907d934d",
  measurementId: "G-7ND8SN37JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
