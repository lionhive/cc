import firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyDgaMEWRsqvAId8iHglL9nglOU_TT_womM",
    authDomain: "celebcoin.firebaseapp.com",
    databaseURL: "https://celebcoin.firebaseio.com",
    projectId: "celebcoin",
    storageBucket: "celebcoin.appspot.com",
    messagingSenderId: "207384441009"
  };
var fire = firebase.initializeApp(config);
export default fire;
