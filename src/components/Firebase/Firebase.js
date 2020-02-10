import FirebaseContext, { withFirebase } from './context';
import app from 'firebase/app';
const config = {
  apiKey: "AIzaSyAy3_v5hH6dP1GO9gCwhO07X4ErP-_Lk0o",
  authDomain: "team-grape.firebaseapp.com",
  databaseURL: "https://team-grape.firebaseio.com",
  projectId: "team-grape",
  storageBucket: "team-grape.appspot.com",
  messagingSenderId: "86066820779",
  appId: "1:86066820779:web:e0dd07e6284d61248669ee",
  measurementId: "G-PG103KPJQY"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
export { FirebaseContext, withFirebase };