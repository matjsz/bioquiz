import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const config = {
    apiKey: "AIzaSyD8A92ctATS2tIYMxha6zRvmB1bLJ9421k",
    authDomain: "bio-quiz-d4fbb.firebaseapp.com",
    projectId: "bio-quiz-d4fbb",
    storageBucket: "bio-quiz-d4fbb.appspot.com",
    messagingSenderId: "720565344639",
    appId: "1:720565344639:web:b74e2dbe2c22849c87624a",
    measurementId: "G-17GSM2YM0H"
}

const app = initializeApp(config);
const db = getFirestore(app)

export { db } 