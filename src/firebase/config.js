import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVKAvoGrTIsxko0I1gkHpsyK7dDZiu7Ho",
    authDomain: "tiktok-clone-79635.firebaseapp.com",
    projectId: "tiktok-clone-79635",
    storageBucket: "tiktok-clone-79635.appspot.com",
    messagingSenderId: "39571023927",
    appId: "1:39571023927:web:c14861e70c8e26000ab7b2",
    measurementId: "G-RGNGB5FTXE"
});

const db = firebaseApp.firestore();

export default db;
