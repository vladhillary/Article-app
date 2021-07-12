import { fireBaseInit } from "./fireBase.js"

fireBaseInit()

const logoBackHome = document.querySelector('.logo')

const backToHome = () => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const showArticleTags = () => {

    const tagsListEl = document.querySelector('.tags_article')
    const tagsListArray = ['Angular', 'Programmer']
    tagsListEl.innerHTML = tagsListArray.map(el => `<button class='tags_article_btn'>${el}</button>`).join('')
}

showArticleTags()

const headerPanelBtn = document.querySelector('.header_panel_btn')

const userBtn = document.createElement('button')

userBtn.setAttribute('class', 'create_post')

userBtn.textContent = 'Sing in'

headerPanelBtn.append(userBtn)

const logOut = () => {

    firebase.auth().signOut().then(() => {
        window.localStorage.removeItem('activeUser')
        window.location.href = './article.html'
    }).catch(err => console.log(err))
}

if (window.localStorage.getItem('activeUser')) {

    const logOutBtnWrapper = headerPanelBtn.cloneNode(true)
    const logOutBtn = logOutBtnWrapper.querySelector('.create_post')

    logOutBtn.textContent = 'Logout'

    logOutBtn.addEventListener('click', logOut)

    userBtn.textContent = 'Create a Post'

    const activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'))

    const headerPanelUser = document.createElement('div')

    headerPanelUser.setAttribute('class', 'header_panel_user')

    const userLogo = document.createElement('img')

    userLogo.setAttribute('alt', 'user logo')
    userLogo.setAttribute('src', activeUserInfo[0].photoURL)

    headerPanelUser.append(userLogo)

    headerPanelBtn.after(headerPanelUser)

    headerPanelBtn.after(logOutBtnWrapper)

    userBtn.addEventListener('click', () => {
        window.location.href = '/pages/createArticle.html'
    })

} else {
    userBtn.addEventListener('click', () => {
        window.location.href = '/pages/singIn.html'
    })
}

