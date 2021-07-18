import { fireBaseInit } from "./fireBase.js"
import '../styles/sass/style.sass'

fireBaseInit()

const logoBackHome = document.querySelector('.logo')

const backToHome = () => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const showArticleTags = () => {

    const tagsListEl = document.querySelector('.tags_article')
    const tagsListArray = ['Angular', 'Programmer']

    const btnArray = tagsListArray.map(el => {
        const btn = document.createElement('button')
        btn.classList.add('tags_article_btn')
        btn.textContent = el
        return btn
    })

    btnArray.forEach(item =>tagsListEl.append(item))
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

const showForActiveUser = () => {

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
}

showForActiveUser()

const closePreview = () => {

    window.history.back()
}

const showCurrentArticle = () => {

    const currentTitle = document.querySelector('.article_title')

    const authorName = document.querySelector('.author_info_name')

    const dateOfWriting = document.querySelector('.author_info_date')

    const currentImg = document.querySelector(".article_pic_wrapper img[alt='article picture']")

    const contentBlock = document.querySelector('.content_block')

    const articleTags = document.querySelector('.tags_article')

    articleTags.innerHTML = ''

    if (window.localStorage.getItem('preview')) {

        const previewContent = JSON.parse(window.localStorage.getItem('preview'))

        const currentHrefImg = JSON.parse(window.localStorage.getItem('srcImgFromFile'))

        currentImg.setAttribute('src', currentHrefImg)
        currentTitle.textContent = previewContent.title
        authorName.textContent = previewContent.user
        dateOfWriting.textContent = previewContent.date
        contentBlock.innerHTML = ''

        const amoutContent = previewContent.content

        amoutContent.forEach(element => {

            const subtitle = document.createElement('h5')
            subtitle.textContent = element.subtitle
            contentBlock.append(subtitle)
            const paragraph = document.createElement('p')
            paragraph.textContent = element.text
            contentBlock.append(paragraph)
        })

        const tags = previewContent.tags

        tags.forEach(el => {

            const btn = document.createElement('button')
            btn.classList.add('tags_article_btn')
            btn.textContent = el
            articleTags.append(btn)
        })

        const closePreviewEl = document.createElement('img')

        closePreviewEl.setAttribute('src', '../img/close_preview.png')
        closePreviewEl.setAttribute('alt', 'close preview')
        closePreviewEl.classList.add('close_preview')

        closePreviewEl.addEventListener('click', closePreview)

        const body = document.querySelector('body')

        body.append(closePreviewEl)

        const createPost = document.querySelectorAll('.create_post')

        createPost.forEach(el => {

            el.setAttribute('disabled', 'disabled')
        })
        logoBackHome.removeEventListener('click', backToHome)

        const home_link = document.querySelector(".home_link")

        home_link.style.cssText = "pointer-events: none"
    }

    if (window.localStorage.getItem('currentArticle')) {

        const currentContent = JSON.parse(window.localStorage.getItem('currentArticle'))

        currentImg.setAttribute('src', currentContent.img)
        currentTitle.textContent = currentContent.title
        authorName.textContent = currentContent.user
        dateOfWriting.textContent = currentContent.date
        contentBlock.innerHTML = ''

        const amoutContent = currentContent.content

        amoutContent.forEach(element => {

            const subtitle = document.createElement('h5')
            subtitle.textContent = element.subtitle
            contentBlock.append(subtitle)
            const paragraph = document.createElement('p')
            paragraph.textContent = element.text
            contentBlock.append(paragraph)
        })

        const tags = currentContent.tags

        tags.forEach(el => {

            const btn = document.createElement('button')
            btn.classList.add('tags_article_btn')
            btn.textContent = el
            articleTags.append(btn)
        })

        window.localStorage.removeItem('currentArticle')
    }
}

showCurrentArticle()
