import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";// import {firebase} from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCpS34aCg9IrYlXcJTLg7PJmFvdzzsc5F0",
    authDomain: "cart-f6db7.firebaseapp.com",
    projectId: "cart-f6db7",
    storageBucket: "cart-f6db7.appspot.com",
    messagingSenderId: "136307452229",
    appId: "1:136307452229:web:d54093d92d8b3a6a67362c",
    measurementId: "G-KHQTP4SEN3"
  };

  firebase.initializeApp(firebaseConfig);
//  console.log("firebase",firebase);
  
ReactDOM.render(<App />, document.getElementById('root'));
