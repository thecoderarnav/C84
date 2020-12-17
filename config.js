import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBHwKByz6C4tQSSfzpTqzgvWS_XvzUL-L0",
  authDomain: "book-santa-d4cdb.firebaseapp.com",
  databaseURL: "https://book-santa-d4cdb.firebaseio.com",
  projectId: "book-santa-d4cdb",
  storageBucket: "book-santa-d4cdb.appspot.com",
  messagingSenderId: "69372301771",
  appId: "1:69372301771:web:c1d81e4ea65c8cfb0e664e",
  measurementId: "G-DLT66XQ7Y5"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
