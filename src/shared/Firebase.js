import * as firebase from 'firebase'
let database;
let config = {
    apiKey: "AIzaSyDeXY5YKhI30_V1TQGDvrgxKgmIfOY6Itw",
    authDomain: "jayleeoctagon.firebaseapp.com",
    databaseURL: "https://jayleeoctagon.firebaseio.com",
    projectId: "jayleeoctagon",
    storageBucket: "jayleeoctagon.appspot.com",
    messagingSenderId: "931750057208"
}

export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    };
 	database = firebase.database();
}