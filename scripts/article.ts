import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE",
    authDomain: "leverxangular2021.firebaseapp.com",
    projectId: "leverxangular2021",
    storageBucket: "leverxangular2021.appspot.com",
    messagingSenderId: "332942002633",
    appId: "1:332942002633:web:02810808ceb15f2407c018"
}
firebase.initializeApp(firebaseConfig)

const logoBackHome: Element = document.querySelector('.logo')

const backToHome = (): void => {
    window.localStorage.removeItem('currentArticle')
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const showArticleTags = (): void => {

    const tagsListEl: Element = document.querySelector('.tags_article')
    const tagsListArray: string[] = ['Angular', 'Programmer']

    const btnArray: HTMLButtonElement[] = tagsListArray.map((el: string): HTMLButtonElement => {
        const btn: HTMLButtonElement = document.createElement('button')
        btn.classList.add('tags_article_btn')
        btn.textContent = el
        return btn
    })

    btnArray.forEach((item: HTMLButtonElement) => tagsListEl.append(item))
}

showArticleTags()

const headerPanelBtn: Element = document.querySelector('.header_panel_btn')

const userBtn: HTMLButtonElement = document.createElement('button')

userBtn.setAttribute('class', 'create_post')

userBtn.textContent = 'Sing in'

headerPanelBtn.append(userBtn)

const logOut = (): void => {

    window.localStorage.removeItem('currentArticle')

    firebase.auth().signOut().then(() => {
        window.localStorage.removeItem('activeUser')
        window.location.href = './article.html'
    }).catch((err:string) => console.log(err))
}

const showForActiveUser = (): void => {

    if (window.localStorage.getItem('activeUser')) {

        const logOutBtnWrapper:any  = headerPanelBtn.cloneNode(true)
        const logOutBtn: HTMLElement = logOutBtnWrapper.querySelector('.create_post')

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

        userBtn.addEventListener('click', (): void => {
            window.localStorage.removeItem('currentArticle')
            window.location.href = '/pages/createArticle.html'
        })

    } else {
        userBtn.addEventListener('click', (): void => {
            window.location.href = '/pages/singIn.html'
        })
    }
}

showForActiveUser()

const closePreview = (): void => {

    window.history.back()
}

const showCurrentArticle = (): void => {

    const currentTitle: Element = document.querySelector('.article_title')

    const authorName: Element = document.querySelector('.author_info_name')

    const dateOfWriting: Element = document.querySelector('.author_info_date')

    const currentImg: Element = document.querySelector(".article_pic_wrapper img[alt='article picture']")

    const contentBlock: Element = document.querySelector('.content_block')

    const articleTags: Element = document.querySelector('.tags_article')

    articleTags.innerHTML = ''

    if (window.localStorage.getItem('preview')) {

        const previewContent = JSON.parse(window.localStorage.getItem('preview'))

        const currentHrefImg = JSON.parse(window.localStorage.getItem('srcImgFromFile'))

        currentImg.setAttribute('src', currentHrefImg)
        currentTitle.textContent = previewContent.title
        authorName.textContent = previewContent.user
        dateOfWriting.textContent = previewContent.date
        contentBlock.innerHTML = ''

        const amoutContent: { subtitle: string, text: string }[] = previewContent.content

        amoutContent.forEach((element: { subtitle: string, text: string }) => {

            const subtitle: HTMLHeadingElement = document.createElement('h5')
            subtitle.textContent = element.subtitle
            contentBlock.append(subtitle)
            const paragraph: HTMLParagraphElement = document.createElement('p')
            paragraph.textContent = element.text
            contentBlock.append(paragraph)
        })

        const tags: string[] = previewContent.tags

        tags.forEach((el: string) => {

            const btn: HTMLButtonElement = document.createElement('button')
            btn.classList.add('tags_article_btn')
            btn.textContent = el
            articleTags.append(btn)
        })

        const closePreviewEl: HTMLImageElement = document.createElement('img')

        closePreviewEl.setAttribute('src', '../img/close_preview.png')
        closePreviewEl.setAttribute('alt', 'close preview')
        closePreviewEl.classList.add('close_preview')

        closePreviewEl.addEventListener('click', closePreview)

        const body: HTMLBodyElement = document.querySelector('body')

        body.append(closePreviewEl)

        const createPost: NodeListOf<Element> = document.querySelectorAll('.create_post')

        createPost.forEach((el: Element) => {

            el.setAttribute('disabled', 'disabled')
        })
        logoBackHome.removeEventListener('click', backToHome)

        const home_link: HTMLElement = document.querySelector(".home_link")

        home_link.style.cssText = "pointer-events: none"
    }

    if (window.localStorage.getItem('currentArticle')) {

        const currentContent = JSON.parse(window.localStorage.getItem('currentArticle'))

        currentImg.setAttribute('src', currentContent.img)
        currentTitle.textContent = currentContent.title
        authorName.textContent = currentContent.user
        dateOfWriting.textContent = currentContent.date
        contentBlock.innerHTML = ''

        const amoutContent: { subtitle: string, text: string }[] = currentContent.content

        amoutContent.forEach((element: { subtitle: string, text: string }) => {

            const subtitle: HTMLHeadingElement = document.createElement('h5')
            subtitle.textContent = element.subtitle
            contentBlock.append(subtitle)
            const paragraph: HTMLParagraphElement = document.createElement('p')
            paragraph.textContent = element.text
            contentBlock.append(paragraph)
        })

        const tags: string[] = currentContent.tags

        tags.forEach((el: string) => {

            const btn: HTMLButtonElement = document.createElement('button')
            btn.classList.add('tags_article_btn')
            btn.textContent = el
            articleTags.append(btn)
        })
    }
}

showCurrentArticle()
window.localStorage.removeItem('currentArticle')
