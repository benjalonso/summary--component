// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm-K_4sU2V6q_gxT8PBz9g3gcqiWYhfpY",
  authDomain: "chileanbirds-b8079.firebaseapp.com",
  projectId: "chileanbirds-b8079",
  storageBucket: "chileanbirds-b8079.appspot.com",
  messagingSenderId: "912187175219",
  appId: "1:912187175219:web:3e590b2db0faedbd0f4e46",
  measurementId: "G-ECE18C0QZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
