var firebaseConfig = {
    apiKey: "AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE",
    authDomain: "leverxangular2021.firebaseapp.com",
    projectId: "leverxangular2021",
    storageBucket: "leverxangular2021.appspot.com",
    messagingSenderId: "332942002633",
    appId: "1:332942002633:web:02810808ceb15f2407c018"
};

firebase.initializeApp(firebaseConfig);

const logoBackHome = document.querySelector('.logo')

const backToHome = () => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const checkbox = document.querySelector("input[type='checkbox']")

const deleteWarningAcceptPolicy = () => {
    document.querySelector('.warning_policy')?.remove()
}

checkbox.addEventListener('click', deleteWarningAcceptPolicy)

let provider = new firebase.auth.GoogleAuthProvider()

const authWithGoogle = () => {

    firebase.auth().signInWithPopup(provider).then(res => {
        
        const activeUserInfo = []
        const userInformation = {
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
            accessToken: res.credential.accessToken
        }

        activeUserInfo.push(userInformation)

        window.localStorage.setItem('activeUser', JSON.stringify(activeUserInfo))

        window.location.href = './../index.html'

    }).catch(err => console.log(err))
}

const checkMarkCheckBox = ()=> {

    if (document.querySelector('.warning_policy')) return

    const warning = document.createElement('div')
    warning.setAttribute('class', 'warning_policy')
    warning.textContent = 'Accept to our Terms of Use and Privacy Policy'
    const acceptTerms = document.querySelector('.sing_ing_wrapper')
    acceptTerms.append(warning)

}

const singInBtn = document.querySelector('.sing_in_btn')

singInBtn.addEventListener('click', () => {

    if (!checkbox.checked) {

        checkMarkCheckBox()
        return
    }

    authWithGoogle()

})