
import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

 
  const config = {
    //Config your own app in firebase
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  const db = firebase.firestore();

  export const dbPhoneRef = db.collection('phoneNumbers');
  export const dbProizvodiRef = db.collection('proizvodi');

  export const firebaseAuth = firebase.auth();

  export const firebaseStorage = firebase.storage();




  
