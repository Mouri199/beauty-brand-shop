// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9LyYUHxMxmR6lS3N4GqqmLwJZ94lSY9o",
  authDomain: "entice-ff6e8.firebaseapp.com",
  projectId: "entice-ff6e8",
  storageBucket: "entice-ff6e8.appspot.com",
  messagingSenderId: "794825198276",
  appId: "1:794825198276:web:a2d8ba17a1eb29947c5791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth