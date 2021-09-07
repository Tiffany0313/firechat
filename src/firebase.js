import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqHWdDg-ijdxQ_d7QOP-fvxvfaCFG5ygU",
    authDomain: "auth.https://Tiffany0313.github.io/firechat",
    projectId: "firechat-37187",
    storageBucket: "firechat-37187.appspot.com",
    messagingSenderId: "1029907543038",
    appId: "1:1029907543038:web:73889e7981a440d976c6af",
    measurementId: "G-VQ7XT8RGFP",
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }