import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBLaXmJ7kuyX2sX5gXzsFkEKqqZU5t4TsU",
    authDomain: "wela-enrollement-react.firebaseapp.com",
    databaseURL: "https://wela-enrollement-react.firebaseio.com",
    projectId: "wela-enrollement-react",
    storageBucket: "wela-enrollement-react.appspot.com",
    messagingSenderId: "100310598269",
    appId: "1:100310598269:web:c0d4d5bf388fcbfad3e714",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export { firebaseApp }
