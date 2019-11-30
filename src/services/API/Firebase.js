import * as Firebase from "firebase";

var firebase = Firebase.initializeApp({
  apiKey: "AIzaSyCYSBvi6NcnDfl9e_pXS4maC9huDopmg88",
  authDomain: "hehiu-b50cd.firebaseapp.com",
  databaseURL: "https://hehiu-b50cd.firebaseio.com",
  projectId: "hehiu-b50cd",
  storageBucket: "hehiu-b50cd.appspot.com",
  messagingSenderId: "172084405423",
  appId: "1:172084405423:web:f240120ac6f376ccc3e05a",
  measurementId: "G-3S8ZB97YWZ"
});

function login({ username, password }) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
}

function register({ username, password }) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then(response => resolve(response))
      .catch(e => reject(e));
  });
}

export default { login, register };
