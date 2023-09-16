// firebase.js
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    // Your Firebase config object
    apiKey: "AIzaSyCuH60x-AT78-V-CEArTeR_DOJu9blGvM4",
    authDomain: "lumineye-ef954.firebaseapp.com",
    projectId: "lumineye-ef954",
    storageBucket: "lumineye-ef954.appspot.com",
    messagingSenderId: "466032815014",
    appId: "1:466032815014:web:3ddc4bc252c8b22b77fd67"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
