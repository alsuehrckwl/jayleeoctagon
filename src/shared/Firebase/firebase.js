import * as firebase from 'firebase';

// let database;
let config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
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
