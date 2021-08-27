import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA_zLhrv6cvy-1r6rROvbEkhT83RlQwjJM",
    authDomain: "ecomerce-espaciogeek-e4bd5.firebaseapp.com",
    projectId: "ecomerce-espaciogeek-e4bd5",
    storageBucket: "ecomerce-espaciogeek-e4bd5.appspot.com",
    messagingSenderId: "848535227525",
    appId: "1:848535227525:web:2dcfe55bdfbe82d6676dec"
  };
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();