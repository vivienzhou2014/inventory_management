// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYYArMrfFRFINoUQRM7iVyuCIByF_vsdM",
  authDomain: "inventory-management-49d9c.firebaseapp.com",
  projectId: "inventory-management-49d9c",
  storageBucket: "inventory-management-49d9c.appspot.com",
  messagingSenderId: "177994972401",
  appId: "1:177994972401:web:71c593ab84faabdf557d50",
  measurementId: "G-Z2DCTXE71L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}