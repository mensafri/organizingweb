// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg1kipTHOrZklenis8F5G4ijgH5tjIWdo",
  authDomain: "organizingweb.firebaseapp.com",
  projectId: "organizingweb",
  storageBucket: "organizingweb.appspot.com",
  messagingSenderId: "101485347059",
  appId: "1:101485347059:web:d828e8b7805bbf99887786",
  measurementId: "G-3L15LS64YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
