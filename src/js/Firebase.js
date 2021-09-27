import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAcgkdY24gP4NApvoBJP5xxL2TSlOQcycs',
  authDomain: 'todo-app-7694e.firebaseapp.com',
  projectId: 'todo-app-7694e',
  storageBucket: 'todo-app-7694e.appspot.com',
  messagingSenderId: '676021455830',
  appId: '1:676021455830:web:c7cbe6c859ccff1f057277',
})

const db = firebaseApp.firestore()

export default db