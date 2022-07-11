import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDtCTHUO0lhnEailzZzC-luGyglMIONaZ4",
  authDomain: "spravcahesielfirebase-96b7c.firebaseapp.com",
  projectId: "spravcahesielfirebase-96b7c",
  storageBucket: "spravcahesielfirebase-96b7c.appspot.com",
  messagingSenderId: "791898842959",
  appId: "1:791898842959:web:25f3657d0c3f734fd9c73a",
  measurementId: "G-S6TDEF4C0J"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const firebaseRelates = {
  db:db,
  auth:auth,
  storage:storage
}
export default firebaseRelates;
