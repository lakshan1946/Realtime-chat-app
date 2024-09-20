import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8b3b8.firebaseapp.com",
  projectId: "reactchat-8b3b8",
  storageBucket: "reactchat-8b3b8.appspot.com",
  messagingSenderId: "14353664518",
  appId: "1:14353664518:web:4ecc77749645e8000cd187",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
