import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX0bA9c-mIX6zTF_hwlZ8jht3YT9F6gbw",
  authDomain: "tik-tok-clone-4f0d3.firebaseapp.com",
  projectId: "tik-tok-clone-4f0d3",
  storageBucket: "tik-tok-clone-4f0d3.appspot.com",
  messagingSenderId: "340042275942",
  appId: "1:340042275942:web:3e80479e616b7a613ea1a7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
