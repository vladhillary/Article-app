const logoBackHome = document.querySelector('.logo')

logoBackHome.addEventListener('click', () => {
    window.location.href = './../index.html'
})

const singInBtn = document.querySelector('.sing_in_btn')
const checkbox = document.querySelector("input[type='checkbox']")

var firebaseConfig = {
    apiKey: "AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE",
    authDomain: "leverxangular2021.firebaseapp.com",
    projectId: "leverxangular2021",
    storageBucket: "leverxangular2021.appspot.com",
    messagingSenderId: "332942002633",
    appId: "1:332942002633:web:02810808ceb15f2407c018"
};

firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider()

singInBtn.addEventListener('click', () => {

    if (!checkbox.checked) {

        if (document.querySelector('.warning_policy')) return

        const warning = document.createElement('div')
        warning.setAttribute('class', 'warning_policy')
        warning.textContent = 'Accept to our Terms of Use and Privacy Policy'
        const acceptTerms = document.querySelector('.sing_ing_wrapper')
        acceptTerms.append(warning)

        return
    }

    firebase.auth().signInWithPopup(provider).then(res =>{

    
        const activeUserInfo = []
        const userInformation = {
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL
        }

        activeUserInfo.push(userInformation)

        window.localStorage.setItem('activeUser', JSON.stringify(activeUserInfo))

        window.location.href = './../index.html'

    }).catch(err=> console.log(err))

})

checkbox.addEventListener('click', () => {
    document.querySelector('.warning_policy')?.remove()
})

