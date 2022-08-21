import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAIcEkTQGo49GBHwIsgEBjCZJZ9U8gqfLg",
  authDomain: "locosen3d-ecommerce.firebaseapp.com",
  projectId: "locosen3d-ecommerce",
  storageBucket: "locosen3d-ecommerce.appspot.com",
  messagingSenderId: "1022044585918",
  appId: "1:1022044585918:web:5616a67ea9de65add283ef"
};

// Initialize Firebase refencia app
const app = initializeApp(firebaseConfig);

export const dbase = getFirestore(app)

export const auth = getAuth(app)

export const storage = getStorage(app)