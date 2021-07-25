import { fireBaseInit } from "./fireBase.js"
import * as firebase from 'firebase'
import '../styles/sass/style.sass'

fireBaseInit()

interface userInformation {
    displayName: string
    email: string
    photoURL: string
    accessToken: string
}

const logoBackHome: Element = document.querySelector('.logo')


const backToHome = (): void => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const checkbox:HTMLInputElement = document.querySelector("input[type='checkbox']")

const deleteWarningAcceptPolicy = (): void => {
    document.querySelector('.warning_policy')?.remove()
}

checkbox.addEventListener('click', deleteWarningAcceptPolicy)

let provider = new firebase.auth.GoogleAuthProvider()

const authWithGoogle = (): void => {

    firebase.auth().signInWithPopup(provider).then((res:any) => {

        const activeUserInfo:userInformation[] = []
        const userInformation:userInformation = {
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
            accessToken: res.credential.accessToken
        }

        activeUserInfo.push(userInformation)

        window.localStorage.setItem('activeUser', JSON.stringify(activeUserInfo))

        window.location.href = './../index.html'

    }).catch((err:never) => console.log(err))
}

const checkMarkCheckBox = (): void => {

    if (document.querySelector('.warning_policy')) return

    const warning :HTMLDivElement= document.createElement('div')
    warning.setAttribute('class', 'warning_policy')
    warning.textContent = 'Accept to our Terms of Use and Privacy Policy'
    const acceptTerms:Element = document.querySelector('.sing_ing_wrapper')
    acceptTerms.append(warning)

}

const singInBtn:Element = document.querySelector('.sing_in_btn')

singInBtn.addEventListener('click', () => {

    if (!checkbox.checked) {

        checkMarkCheckBox()
        return
    }

    authWithGoogle()

})