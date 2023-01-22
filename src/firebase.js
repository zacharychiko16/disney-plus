import firebase from './firebase'
import 'firebase/firebase-auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJLtcHzPDUOHb-seEREW-1xw551u3eXqI",
  authDomain: "disney-clone-6c66b.firebaseapp.com",
  projectId: "disney-clone-6c66b",
  storageBucket: "disney-clone-6c66b.appspot.com",
  messagingSenderId: "382773599397",
  appId: "1:382773599397:web:ba71263af3ecc78766814c",
  measurementId: "G-LX40Z2FTFL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
