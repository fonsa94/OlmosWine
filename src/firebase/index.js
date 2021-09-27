import firebase from "firebase/app";
import 'firebase/firestore';

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDL8WkfQ_WIEUKijeE2hJLz2rc4s35ZJBo",
  authDomain: "ignaciofonsalido.firebaseapp.com",
  projectId: "ignaciofonsalido",
  storageBucket: "ignaciofonsalido.appspot.com",
  messagingSenderId: "1095219609588",
  appId: "1:1095219609588:web:b518767699be01250a83a1"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}