import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMEBasd7H8WRiXNqgsW9_JnrlufY5RowE",
    authDomain: "amazan-clone-sasi.firebaseapp.com",
    projectId: "amazan-clone-sasi",
    storageBucket: "amazan-clone-sasi.appspot.com",
    messagingSenderId: "639510330540",
    appId: "1:639510330540:web:7651853937a5e4afc0f309"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export {auth};
// export {createUserWithEmailAndPassword};
// export {signInWithEmailAndPassword};

