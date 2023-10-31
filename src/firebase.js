import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDo7JjfwoZlRLPK1aDXYsycPYm4Ck1NULY",
    authDomain: "twitter-clone-2706c.firebaseapp.com",
    projectId: "twitter-clone-2706c",
    storageBucket: "twitter-clone-2706c.appspot.com",
    messagingSenderId: "397856548988",
    appId: "1:397856548988:web:bb7c160f54e9cefa4381f9",
    measurementId: "G-7Y3GVZ6ENB"
  
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;