import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAmzEWjnmezxJU2FXioXoWZwi_YB3vFB2U',
  authDomain: 'catch-of-the-day-tb-6881b.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-tb-6881b-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
 export default base;