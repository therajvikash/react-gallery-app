import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQ8prO0RHA5xzljjrga0HrHELwDzGDPSI",
  authDomain: "react-photo-gallery-app-bc9ce.firebaseapp.com",
  projectId: "react-photo-gallery-app-bc9ce",
  storageBucket: "react-photo-gallery-app-bc9ce.appspot.com",
  messagingSenderId: "40126726677",
  appId: "1:40126726677:web:bc311e19cdfdede6c1041c",
  measurementId: "G-NKTXJN1NSM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const projectFirestore = firebaseApp.firestore();
const projectStorage = firebaseApp.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
