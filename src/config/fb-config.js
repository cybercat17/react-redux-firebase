import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB2Y4UN6X8tUzC5OmfKL3uZJMRJnourVGk",
  authDomain: "manager-92110.firebaseapp.com",
  databaseURL: "https://manager-92110.firebaseio.com",
  projectId: "manager-92110",
  storageBucket: "",
  messagingSenderId: "105557715525",
  appId: "1:105557715525:web:657f7226475efd98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots : true });

export default firebase;