import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDwSZCTFlN-GIk_4N3yQ54M_iFqjfR-zzA",
  authDomain: "clone-ac9b9.firebaseapp.com",
  projectId: "clone-ac9b9",
  storageBucket: "clone-ac9b9.appspot.com",
  messagingSenderId: "746210568953",
  appId: "1:746210568953:web:19b4c396d904357bc8d028",
  measurementId: "G-2PN7S7ED4J"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};