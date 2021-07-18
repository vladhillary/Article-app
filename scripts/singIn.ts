import { fireBaseInit } from "./fireBase.js"


fireBaseInit()

const logoBackHome: object = document.querySelector('.logo')


const backToHome = ():void => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const checkbox:object = document.querySelector("input[type='checkbox']")

const deleteWarningAcceptPolicy = ():void => {
    document.querySelector('.warning_policy')?.remove()
}

checkbox.addEventListener('click', deleteWarningAcceptPolicy)

let provider:any = new firebase.auth.GoogleAuthProvider()

const authWithGoogle = ():void => {

    firebase.auth().signInWithPopup(provider).then(res => {
        
        const activeUserInfo:object[] = []
        const userInformation:object = {
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

const checkMarkCheckBox = ():void=> {

    if (document.querySelector('.warning_policy')) return

    const warning:object = document.createElement('div')
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