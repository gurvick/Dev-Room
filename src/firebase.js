import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA9NHvMgPBH2cZ5jVEBifF9SH1e5DKTWc0',
  authDomain: 'projex-2549b.firebaseapp.com',
  projectId: 'projex-2549b',
  storageBucket: 'projex-2549b.appspot.com',
  messagingSenderId: '388459321739',
  appId: '1:388459321739:web:67cff3187b19abbe75f78e',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
