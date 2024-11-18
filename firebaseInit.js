// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtZYNpP1Ez2fun2ERKJhhGg_VLYbVXbwA",
  authDomain: "new-project-ddb8b.firebaseapp.com",
  projectId: "new-project-ddb8b",
  storageBucket: "new-project-ddb8b.firebasestorage.app",
  messagingSenderId: "689893344956",
  appId: "1:689893344956:web:c7920ea980932d4efbb2b9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);