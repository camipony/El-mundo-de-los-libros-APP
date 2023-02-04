// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY82cwLKbzVI5k-73d7rxGL_gSY99sES0",
  authDomain: "mdl-project-e7fa1.firebaseapp.com",
  projectId: "mdl-project-e7fa1",
  storageBucket: "mdl-project-e7fa1.appspot.com",
  messagingSenderId: "501228978140",
  appId: "1:501228978140:web:5bd191d5c50755c4639919"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)