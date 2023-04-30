// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVd-lW09PQ27uz0MTqn2ApGzcyjIqkx18",
  authDomain: "booknexus-84262.firebaseapp.com",
  projectId: "booknexus-84262",
  storageBucket: "booknexus-84262.appspot.com",
  messagingSenderId: "56787024769",
  appId: "1:56787024769:web:d8efe081ec60d3011dc680",
  measurementId: "G-8DGVFL7DBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const googleprovider=new GoogleAuthProvider(app);
export const db=getFirestore(app)
export const storage=getStorage(app);