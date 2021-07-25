export var firebaseConfig = {
    apiKey: "AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE",
    authDomain: "leverxangular2021.firebaseapp.com",
    projectId: "leverxangular2021",
    storageBucket: "leverxangular2021.appspot.com",
    messagingSenderId: "332942002633",
    appId: "1:332942002633:web:02810808ceb15f2407c018"
}
export const fireBaseInit = () => {

    firebase.initializeApp(firebaseConfig)
}