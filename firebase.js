import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCpmDpN68ZPT__RhPkgRr0Z_wxwpOetWow",
  authDomain: "shs-report-system.firebaseapp.com",
  projectId: "shs-report-system",
  storageBucket: "shs-report-system.firebasestorage.app",
  messagingSenderId: "381807513016",
  appId: "1:381807513016:web:e826c08bed6538907e934d",
  measurementId: "G-7NDR5N3738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
