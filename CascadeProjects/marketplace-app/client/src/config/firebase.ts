import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAeDQbIaXPE_y1L4XmysonufgJQHonDCyU",
  authDomain: "marketplace-99a7b.firebaseapp.com",
  projectId: "marketplace-99a7b",
  storageBucket: "marketplace-99a7b.firebasestorage.app",
  messagingSenderId: "336976624925",
  appId: "1:336976624925:web:3def2f32bb4ed702f8b5f4",
  measurementId: "G-M9LJR21YS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
