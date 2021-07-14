import { fireBaseInit } from "./fireBase.js"

fireBaseInit()

const tagsListEl = document.querySelector('.tags')
const tagsListArray = ['Angular', 'SAP ABAP', 'Java', 'Design', 'SAP TM Consultant', 'Frontend', 'Programmer', 'Python', 'DevOps']

tagsListEl.innerHTML = tagsListArray.map(el => `<button class='tags_btn'>${el}</button>`).join('')

const tagsListBtn = document.querySelectorAll('.tags_btn')

tagsListBtn.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
    })
})

const articleItem = document.querySelectorAll('.item')

articleItem.forEach(el => {
    el.addEventListener('click', () => {

        el.style.cssText = `box-shadow: 0px 12px 24px rgba(227, 232, 240, 0.5)`

        window.location.href = 'pages/article.html'
    })
})

const headerPanelBtn = document.querySelector('.header_panel_btn')

const userBtn = document.createElement('button')

userBtn.setAttribute('class', 'create_post')

userBtn.textContent = 'Sing in'

headerPanelBtn.append(userBtn)

const logOut = () => {

    firebase.auth().signOut().then(() => {
        window.localStorage.removeItem('activeUser')
        window.location.href = './../index.html'
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


let firestoreDatabase = firebase.firestore()

const getDataFromFirestore = () => {

    firestoreDatabase.collection('article').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            articleRenderFromFirestoreDatabase(doc.data())
        })

    })
}

getDataFromFirestore()

const articleRenderFromFirestoreDatabase = (data) => {

    const articlesSection = document.querySelector('.main_articles_selection')

    console.log(data)

    const item = document.querySelector('.item')

    const newItem = item.cloneNode(true)
    const src = JSON.parse(window.localStorage.getItem('srcImgFromFile')) 

    newItem.querySelector('.item_title').textContent = data.title
    newItem.querySelector('.item_subtitle').textContent = data.content[0].subtitle
    newItem.querySelector('img').setAttribute('src', src)

    

    console.log(src)

    console.log(newItem)

    articlesSection.append(newItem)
  
}
