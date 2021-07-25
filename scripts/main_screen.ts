import { fireBaseInit } from "./fireBase"
import '../styles/sass/style.sass'
import * as firebase from 'firebase'


fireBaseInit()

interface articleArray {
    title: string
    content: {
        subtitle: string
        text: string
    }[]
    tags: string[]
    user: string
    date: string
    id: number
    img: string
}

const tagsListEl:Element = document.querySelector('.tags')
const tagsListArray:string[] = ['Angular', 'SAP ABAP', 'Java', 'Design', 'SAP TM Consultant', 'Frontend', 'Programmer', 'Python', 'DevOps']

const btnArray:HTMLButtonElement[] =  tagsListArray.map((el:string) => {
    const btn:HTMLButtonElement = document.createElement('button')
    btn.classList.add('tags_btn')
    btn.textContent = el
    return btn
})

btnArray.forEach((item:HTMLButtonElement)=> {
    tagsListEl.append(item)
})

const articleItem: NodeListOf<Element> = document.querySelectorAll('.item')

articleItem.forEach((el:HTMLElement) => {
    el.addEventListener('click', () => {

        el.style.cssText = `box-shadow: 0px 12px 24px rgba(227, 232, 240, 0.5)`

        window.location.href = 'pages/article.html'
    })
})

const headerPanelBtn:Element = document.querySelector('.header_panel_btn')

const userBtn:HTMLButtonElement = document.createElement('button')

userBtn.setAttribute('class', 'create_post')

userBtn.textContent = 'Sing in'

headerPanelBtn.append(userBtn)

const logOut = ():void => {

    firebase.auth().signOut().then(() => {
        window.localStorage.removeItem('activeUser')
        window.location.href = './../index.html'
    }).catch((err:never) => console.log(err))
}

if (window.localStorage.getItem('activeUser')) {

    const logOutBtnWrapper:Node = headerPanelBtn.cloneNode(true)
    const logOutBtn: HTMLElement = logOutBtnWrapper.parentNode.querySelector('.create_post')
    logOutBtn.textContent = 'Logout'

    logOutBtn.addEventListener('click', logOut)

    userBtn.textContent = 'Create a Post'

    const activeUserInfo: {accessToken:string,displayName:string,email:string,photoURL:string}[] = JSON.parse(window.localStorage.getItem('activeUser'))

    const headerPanelUser: HTMLDivElement = document.createElement('div')

    headerPanelUser.setAttribute('class', 'header_panel_user')

    const userLogo: HTMLImageElement = document.createElement('img')

    userLogo.setAttribute('alt', 'user logo')
    userLogo.setAttribute('src', activeUserInfo[0].photoURL)

    headerPanelUser.append(userLogo)

    headerPanelBtn.after(headerPanelUser)

    headerPanelBtn.after(logOutBtnWrapper)

    userBtn.addEventListener('click', ():void => {
        window.location.href = '/pages/createArticle.html'
    })
} else {
    userBtn.addEventListener('click', ():void => {
        window.location.href = '/pages/singIn.html'
    })
}

let firestoreDatabase = firebase.firestore()

let articleArray:articleArray[] = []
const selectedTagArray:string[] = []

const getDataFromFirestore = ():void => {

    articleArray.splice(0, articleArray.length)

    firestoreDatabase.collection('article').get().then((querySnapshot:any) => {
        querySnapshot.forEach((doc:any) => {

            articleArray.push(doc.data())
        })

        renderItemOfArticle()
    })

}

getDataFromFirestore()

const getDataForArticle = (id:number|string) => {

    firestoreDatabase.collection('article').get().then((querySnapshot:any) => {

        querySnapshot.forEach((doc:any) => {
            if (doc.data().id == id) {

                window.localStorage.setItem('currentArticle', JSON.stringify(doc.data()))
                window.location.href = '../pages/article.html'
            }
        })
    })
}
const clickHandler = (event:any):void => {

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

const renderItemOfArticle = ():void => {

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
    
    let items:HTMLDivElement[] = articleArray.map((el:articleArray) => {

        const newItem:HTMLDivElement = document.createElement('div')
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

const searchInput:HTMLInputElement = document.querySelector(".search input[type='text']")

const searchArticleForTitle = () => {
    
    let value:string = searchInput.value

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

const tagsListBtn:NodeListOf<Element> = document.querySelectorAll('.tags_btn')

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

