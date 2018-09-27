import * as firebase from 'firebase';

// let database;
let config = {
  apiKey: 'AIzaSyDeXY5YKhI30_V1TQGDvrgxKgmIfOY6Itw',
  authDomain: 'jayleeoctagon.firebaseapp.com',
  databaseURL: 'https://jayleeoctagon.firebaseio.com',
  projectId: 'jayleeoctagon',
  storageBucket: 'jayleeoctagon.appspot.com',
  messagingSenderId: '931750057208',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default {
  auth,
  db,
  storage,
};
