// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBpQU4x_S5NjwQnDereWg3aQBe_bTQaqg",
  authDomain: "two--jobs.firebaseapp.com",
  projectId: "two--jobs",
  storageBucket: "two--jobs.appspot.com",
  messagingSenderId: "1088687727364",
  appId: "1:1088687727364:web:43bc4b72f79a827cfd6651",
  measurementId: "G-0SP8Y139JQ"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}