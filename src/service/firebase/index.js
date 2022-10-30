import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPuXjYXWnSpBtVQ4hEK-kOqo6xs1hizsQ",
  authDomain: "react-lucianacorti.firebaseapp.com",
  projectId: "react-lucianacorti",
  storageBucket: "react-lucianacorti.appspot.com",
  messagingSenderId: "522036971867",
  appId: "1:522036971867:web:df13763792d823844eb27e",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
