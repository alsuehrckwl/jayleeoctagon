import { call, fork, take, put } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { LOGIN, LOGOUT } from '../Auth/Auth.store';
import { auth } from '../../shared/Firebase/firebase';

export function* login(data) {
  try {
    // console.log(data);
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });

    // Cookies.set('jwt', '');
  } catch (e) {
    throw e;
  }
}

export function* logout() {
  try {
    auth
      .signOut()
      .then(() => {
        console.log('logout success');
      })
      .catch(error => {
        console.log(error);
      });
    // Cookies.remove('jwt');
  } catch (e) {
    throw e;
  }
}

export function* watchLoginRequest() {
  while (true) {
    const { payload } = yield take(LOGIN);
    yield call(login, payload.data);
  }
}

export function* watchLogout() {
  while (true) {
    yield take(LOGOUT);
    yield call(logout);
  }
}

export default function*() {
  yield fork(watchLoginRequest);
  yield fork(watchLogout);
}
