// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkue5w2F3PRlxHRUYCgPGTlMhu0By5tc",
  authDomain: "support-ai-e87de.firebaseapp.com",
  projectId: "support-ai-e87de",
  storageBucket: "support-ai-e87de.appspot.com",
  messagingSenderId: "832542113196",
  appId: "1:832542113196:web:c5ec68463c94b2b49bce09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);