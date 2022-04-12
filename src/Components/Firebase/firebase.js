import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDAeGns9gH9zvXVsWgmhG4-PpPMgGdJiUA",
  authDomain: "endangerd-project.firebaseapp.com",
  projectId: "endangerd-project",
  storageBucket: "endangerd-project.appspot.com",
  messagingSenderId: "767181069585",
  appId: "1:767181069585:web:0b7280a13ca16be03280b0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);
