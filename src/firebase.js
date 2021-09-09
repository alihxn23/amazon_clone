import firebase from 'firebase/compat';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDETRE--EliBEwJE2C8ebNUB13oMsMD7fs",
    authDomain: "clone-bf0a7.firebaseapp.com",
    projectId: "clone-bf0a7",
    storageBucket: "clone-bf0a7.appspot.com",
    messagingSenderId: "307584269970",
    appId: "1:307584269970:web:ab67549f4a1913d4daf04b",
    measurementId: "G-QCVL5T13L2"
});

const auth = firebase.auth();

export {auth};