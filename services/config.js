// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvhz9b3YIK33bvnPWULzVyrwTlTebAndw",
  authDomain: "phonebook-f17a4.firebaseapp.com",
  projectId: "phonebook-f17a4",
  storageBucket: "phonebook-f17a4.appspot.com",
  messagingSenderId: "652787341140",
  appId: "1:652787341140:web:8faf9b5217a742800c5ac1",
  measurementId: "G-TGYV9MN8XE"

};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
const db = getFirestore(app);

// Export the authentication service if needed
const auth = getAuth(app);

export { db , app , auth }; // Export other Firebase services as needed