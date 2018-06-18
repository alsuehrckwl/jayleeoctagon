import * as firebase from 'firebase'
let database;
let config = {

}

export const fire = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    };
 	database = firebase.database();
}
