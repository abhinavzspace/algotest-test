// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs3yzqDGrbSBVBDxBsXIslEDQU-p_HQxg",
  authDomain: "algotest-test.firebaseapp.com",
  projectId: "algotest-test",
  storageBucket: "algotest-test.appspot.com",
  messagingSenderId: "674103158221",
  appId: "1:674103158221:web:df5e69f309f2149a0f5084",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
