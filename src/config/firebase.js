import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyAP8pIFDDIcpoO32EOwr0RfjDR38jDTza0',
  authDomain: 'zemogauitest-8bb5e.firebaseapp.com',
  projectId: 'zemogauitest-8bb5e',
  storageBucket: 'zemogauitest-8bb5e.appspot.com',
  messagingSenderId: '503598944385',
  appId: '1:503598944385:web:bb8ee866e69b1d40d73d80',
  measurementId: 'G-T46LLMHEQX',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
