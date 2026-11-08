import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAjlW2jG3RNy0p9Rck4p0WOdqYnp3nuSo",
  authDomain: "hb-market-343ed.firebaseapp.com",
  projectId: "hb-market-343ed",
  storageBucket: "hb-market-343ed.firebasestorage.app",
  messagingSenderId: "148836062057",
  appId: "1:148836062057:web:4fabd897d41b87b7b0e3f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);