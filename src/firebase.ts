// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCMszRkxkBRgZ_zpXMI9SUSotl-ceqazm4",
  authDomain: "typescript-66b49.firebaseapp.com",
  databaseURL: "https://typescript-66b49-default-rtdb.firebaseio.com",
  projectId: "typescript-66b49",
  storageBucket: "typescript-66b49.appspot.com",
  messagingSenderId: "558418719575",
  appId: "1:558418719575:web:89947cea0843c433944412",
  measurementId: "G-CRMJNGPR6K"
};


const app = initializeApp(firebaseConfig);
 
export const db=getFirestore(app)
export const auth=getAuth(app)

export default app