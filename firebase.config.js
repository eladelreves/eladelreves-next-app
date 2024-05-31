import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyClEEnXuanTd-4Q7M20Ln-c3iURy0fBf8g",
    authDomain: "eladelreves-next-app.firebaseapp.com",
    projectId: "eladelreves-next-app",
    storageBucket: "eladelreves-next-app.appspot.com",
    messagingSenderId: "618502859515",
    appId: "1:618502859515:web:6e73c34686ab51403f1e5e",
    measurementId: "G-ECXXFC7BP0"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore()

export const storage = getStorage(app);

export const auth = getAuth()