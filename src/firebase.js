import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAPjfOHCD4IF2p210ZgVjndnpGtcNLqAWQ",
  authDomain: "challenge-ac537.firebaseapp.com",
  databaseURL: "https://challenge-ac537-default-rtdb.firebaseio.com",
  projectId: "challenge-ac537",
  storageBucket: "challenge-ac537.appspot.com",
  messagingSenderId: "124741828583",
  appId: "1:124741828583:web:86f95fa4919a78bd88c742",
  measurementId: "G-EQ8QFFSJQQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

