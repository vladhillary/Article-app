import { fireBaseInit } from "./fireBase.js"


fireBaseInit()

const tagsListEl = document.querySelector('.tags')
const tagsListArray = ['Angular', 'SAP ABAP', 'Java', 'Design', 'SAP TM Consultant', 'Frontend', 'Programmer', 'Python', 'DevOps']

const btnArray =  tagsListArray.map(el => {
    const btn = document.createElement('button')
    btn.classList.add('tags_btn')
    btn.textContent = el
    return btn
})

btnArray.forEach(item=> {
    tagsListEl.append(item)
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

let articleArray = []
const selectedTagArray = []

const getDataFromFirestore = () => {

    articleArray.splice(0, articleArray.length)

    firestoreDatabase.collection('article').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            articleArray.push(doc.data())
        })

        renderItemOfArticle()
    })

}

getDataFromFirestore()

const getDataForArticle = (id) => {

    firestoreDatabase.collection('article').get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            if (doc.data().id == id) {

                window.localStorage.setItem('currentArticle', JSON.stringify(doc.data()))
                window.location.href = '../pages/article.html'
            }
        })
    })
}
const clickHandler = (event) => {

    if (event.target.id) getDataForArticle(event.target.id)

    if (event.target.classList.contains('item_subtitle')) {

        let IdOfArticle = event.target.parentElement.parentElement.id
        getDataForArticle(IdOfArticle)

    }
    if (event.target.hasAttribute('src')) {

        let IdOfArticle = event.target.parentElement.id
        getDataForArticle(IdOfArticle)
    }

    if (event.target.classList.contains('item_title')) {

        let IdOfArticle = event.target.parentElement.parentElement.id

        getDataForArticle(IdOfArticle)
    }

    if (event.target.classList.contains('title_wrapper')) {

        let IdOfArticle = event.target.parentElement.id

        getDataForArticle(IdOfArticle)
    }
}

const renderItemOfArticle = () => {

    const articleSection = document.querySelector('.main_articles_selection')
    const itemArray = document.querySelectorAll('.item')

    itemArray.forEach(el => {
        articleSection.removeChild(el)
    })

    const items = createElForArticle()

    items.forEach(el => {
        articleSection.append(el)
    })
}

const createElForArticle = () => {
    
    let items = articleArray.map(el => {

        const newItem = document.createElement('div')
        newItem.setAttribute('id', el.id)
        newItem.classList.add('item')
        const img = document.createElement('img')
        img.setAttribute('src', el.img)
        img.setAttribute('alt', 'article item')
        const titleWrapper = document.createElement('div')
        titleWrapper.classList.add('title_wrapper')
        const itemTitle = document.createElement('h6')
        itemTitle.classList.add('item_title')
        itemTitle.textContent = el.title
        const itemSubTitle = document.createElement('p')
        itemSubTitle.classList.add('item_subtitle')
        itemSubTitle.textContent = el.content[0].subtitle
        titleWrapper.append(itemTitle)
        titleWrapper.append(itemSubTitle)
        newItem.append(img)
        newItem.append(titleWrapper)

        newItem.addEventListener('click', clickHandler)

        return newItem
    })

    return items
}

const searchInput = document.querySelector(".search input[type='text']")

const searchArticleForTitle = () => {
    
    let value = searchInput.value

    articleArray = articleArray.filter(item => {
        if (value == '') {
            getDataFromFirestore()
            return
        }
        if (item.title.toLowerCase().includes(value.toLowerCase())) {

            return item
        }
    })

    createElForArticle()
    renderItemOfArticle()
}

searchInput.addEventListener('input', searchArticleForTitle)

const tagsListBtn = document.querySelectorAll('.tags_btn')

const searchArticleForTag = () => {

    let activeTag = getSelectedTags()

    if (activeTag.length == 0) return

    articleArray = articleArray.filter(item => {

        return item.tags.some(tag => {
            return activeTag.includes(tag)
        })
    })

    renderItemOfArticle()
}

const getSelectedTags = () => {

    selectedTagArray.splice(0, selectedTagArray.length)

    const activeTag = document.querySelectorAll('.tags_btn.active')
    activeTag.forEach(el => {

        selectedTagArray.push(el.textContent)
    })

    if (activeTag.length == 0) getDataFromFirestore()

    return selectedTagArray
}

tagsListBtn.forEach(el => {
    el.addEventListener('click', () => {

        el.classList.toggle('active')

        searchArticleForTag()
    })
})

