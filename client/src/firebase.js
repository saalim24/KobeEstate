import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kobeestate-23c4d.firebaseapp.com",
  projectId: "kobeestate-23c4d",
  storageBucket: "kobeestate-23c4d.appspot.com",
  messagingSenderId: "255505139913",
  appId: "1:255505139913:web:f17ed0e817dd3fe1846518",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
