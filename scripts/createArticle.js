import { fireBaseInit } from "./fireBase.js"

fireBaseInit()

let img;
let firestoreDatabase = firebase.firestore()
let fireStorage = firebase.storage()

const logoBackHome = document.querySelector('.logo')

const backToHome = () => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const inputTitle = document.querySelector('.title_input')

const removeWarningForTitle = () => {

    const warningForTitle = document.querySelector('.warning')

    if (inputTitle.value !== '') warningForTitle?.remove()
}

inputTitle.addEventListener('input', removeWarningForTitle)

const showUserPhoto = () => {

    const userPhoto = document.querySelector("img[alt='user logo']")

    const activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'))

    userPhoto.setAttribute('src', activeUserInfo[0].photoURL)
}

if (window.localStorage.getItem('activeUser')) {

    showUserPhoto()
}

const addTagInfo = ['Angular', 'Design', 'SAP ABAP', 'Product Development', 'Web Disign', 'SAP TM Consultant', 'DevOps', 'UX/UI Design', 'Android', 'Frontend', 'Java', 'Programmer', 'Python']

const chooseTag = document.querySelector('.select_tag')

const selectTagForArticle = () => {

    const btnArray = addTagInfo.map(el => {

        const btn = document.createElement('button')
        btn.classList.add('tags_btn')
        const span = document.createElement('span')
        span.classList.add('add_tag_plus')
        btn.textContent = el
        const plusIco = document.createElement('img')
        plusIco.setAttribute('src', '../img/add_tag_plus.svg')
        plusIco.setAttribute('alt', 'plus icon')
        span.append(plusIco)
        btn.prepend(span)

        return btn
    })

    btnArray.forEach(item => {
        chooseTag.append(item)
    })
}

selectTagForArticle()

const addTagsListBtn = document.querySelectorAll('.tags_btn')

const addedTagsBtn = []

const blockChoseTag = document.querySelector('.selected_tags')

const deleteChosedTag = (e) => {

    const btnContent = e.target.textContent
    e.target.remove()
    addedTagsBtn.forEach((el,index) =>{
        if(btnContent == el) {
            addedTagsBtn.splice(index,1)
        }
    })
}

const showSelectedTagForArticle = () => {

    const btnArray = addedTagsBtn.map(el => {

        const btn = document.createElement('button')
        btn.classList.add('tag_btn_chose')
        btn.textContent = el
        return btn
    })
    blockChoseTag.innerHTML = ''
    btnArray.forEach(item => {
        item.addEventListener('click', deleteChosedTag)
        blockChoseTag.append(item)
    })
}

const checkMouseTarget = (event) => {

    if (event.target.classList.contains('tags_btn')) {

        let textOfTag = event.target.textContent

        if (addedTagsBtn.indexOf(textOfTag) == -1) {
            addedTagsBtn.push(textOfTag)
        }
    }
    if (event.target.hasAttribute('src')) {

        let textOfTag = event.target.parentElement.parentElement.textContent

        if (addedTagsBtn.indexOf(textOfTag) == -1) {
            addedTagsBtn.push(textOfTag)
        }
    }

    if (event.target.classList.contains('add_tag_plus')) {

        let textOfTag = event.target.parentElement.textContent

        if (addedTagsBtn.indexOf(textOfTag) == -1) {
            addedTagsBtn.push(textOfTag)
        }
    }

    showSelectedTagForArticle()
}

addTagsListBtn.forEach(el => {
    el.addEventListener('click', checkMouseTarget)
})

const inputFile = document.querySelector('#show')
const preview = document.querySelector('.preview_img')

const bytesToSize = (bytes) => {

    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

    if (!bytes) return '0 Byte'

    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}

const removeWarningForImg = () => {

    const warningForTitle = document.querySelector('.warning_img')

    warningForTitle?.remove()
}

inputFile.addEventListener('change', (event) => {

    let files = []

    if (!event.target.files.length) return

    files = Array.from(event.target.files)

    preview.innerHTML = ''

    img = files[0]

    if (img) removeWarningForImg()

    files.forEach(el => {

        if (!el.type.match('image')) return

        const reader = new FileReader()

        reader.onload = e => {
            const src = e.target.result

            preview.insertAdjacentHTML('afterbegin', `
            <div class="preview_img_block">
            <div class='preview_remove' data-name='${el.name}'>&times;</div>
            <img src='${src}' alt='${el.name}'/>
            <div class='preview_info'>
            <span>${el.name}</span>
            ${bytesToSize(el.size)}
            </div>
            </div>
            `)

            window.localStorage.setItem('srcImgFromFile', JSON.stringify(src))
        }

        reader.readAsDataURL(el)
    })

    const removeHandler = (e) => {

        if (!e.target.dataset.name) return

        const { name } = e.target.dataset

        files = files.filter(el => el.name !== name)

        const block = preview.querySelector(`[data-name='${name}']`).closest('.preview_img_block')

        block.remove()
    }

    preview.addEventListener('click', removeHandler)
})

const newBlockArticle = document.querySelector('.add_block')

const addNewBlockArticle = () => {

    const addNewBlockInputs = document.querySelector('.add_new_block_wrapper')

    let newBlock = addNewBlockInputs.cloneNode(true)

    const newSubTitleInput = newBlock.querySelector('.subtitle_input')

    const newTextarea = newBlock.querySelector('textarea')

    newSubTitleInput.value = ''
    newTextarea.value = ''

    newBlockArticle.before(newBlock)
}

newBlockArticle.addEventListener('click', addNewBlockArticle)

const getCurrentDate = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currentDate = new Date()

    let dateString = ''

    dateString = `${monthNames[currentDate.getMonth() + 1]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`

    return dateString
}

const checkImg = () => {

    if (!img) {

        const warningForImg = document.createElement('p')
        warningForImg.classList.add('warning_img')
        warningForImg.textContent = 'Article must have some picture'
        warningForImg.style.cssText = "color: red; margin-bottom: 10px; font-weight: bold"

        document.querySelector('.upload_img').before(warningForImg)
        return
    }
    return true
}

const uploadImgToFirestorage = async (newArticle) => {

    let warningImg = checkImg()

    if (!warningImg) return

    await fireStorage.ref(img?.name).put(img)

    await fireStorage.ref(img?.name).put(img).snapshot.ref.getDownloadURL().then((url) => {

        let getArticleForUpdate = firestoreDatabase.collection('article').doc(newArticle.title)

        getArticleForUpdate.update({
            title: newArticle.title,
            content: newArticle.content,
            tags: newArticle.tags,
            user: newArticle.user,
            date: newArticle.date,
            id: newArticle.id,
            img: url
        }).catch((error) => {
            console.error("Error updating document: ", error)
        })
    })
    backToHome()
    window.localStorage.removeItem('srcImgFromFile')
}

const checkInputTitle = () => {

    if (!inputTitle.value) {
        const warningForTitle = document.createElement('p')
        warningForTitle.classList.add('warning')
        warningForTitle.textContent = 'Article must have some title'
        warningForTitle.style.cssText = "color: red; margin-bottom: 10px; font-weight: bold"

        document.querySelector('.title_input').before(warningForTitle)
        return
    }
    return true
}

const getContentForNewArticle = () => {

    let warningTitle = checkInputTitle()

    if (!warningTitle) return

    const contentArticle = []

    const textareas = document.querySelectorAll("textarea[name='article_text']")

    const userName = JSON.parse(window.localStorage.getItem('activeUser'))[0].displayName

    const subtitles = document.querySelectorAll('.subtitle_input')

    const currentDate = getCurrentDate()

    const id = Date.now()

    const subtitlesLength = subtitles.length

    for (let i = 0; subtitlesLength > i; i++) {

        const contentBlock = {
            subtitle: subtitles[i].value,
            text: textareas[i].value
        }
        contentArticle.push(contentBlock)
    }

    const newArticle = {
        title: inputTitle.value,
        content: contentArticle,
        tags: addedTagsBtn,
        user: userName,
        date: currentDate,
        id: id
    }

    return newArticle
}

const addNewArticleToFirestoreDatabase = () => {

    const newArticle = getContentForNewArticle()

    uploadImgToFirestorage(newArticle)
    if (!newArticle) return

    firestoreDatabase.collection("article").doc(newArticle?.title).set(newArticle)
        .catch((error) => {
            console.error("Error adding document: ", error)
        })
}

const publishBtn = document.querySelector('.publish_btn')

publishBtn.addEventListener('click', addNewArticleToFirestoreDatabase)

const previewBtn = document.querySelector('.preview_btn')

const showPreview = () => {

    let warningImg = checkImg()
    if (!warningImg) return

    let warningTitle = checkInputTitle()
    if (!warningTitle) return

    const contentForPreview = getContentForNewArticle()

    window.localStorage.setItem('preview', JSON.stringify(contentForPreview))
    window.location.href = '../pages/article.html'
}

previewBtn.addEventListener('click', showPreview)

const setValueAfterPreview = () => {

    if (window.localStorage.getItem('preview')) {

        const previewContent = JSON.parse(window.localStorage.getItem('preview'))

        const amoutContent = previewContent.content

        if (amoutContent.length > 1) {

            amoutContent.forEach((el, index) => {
                if (index !== 0) {
                    const addNewBlockInputs = document.querySelector('.add_new_block_wrapper')

                    let newBlock = addNewBlockInputs.cloneNode(true)

                    const newSubTitleInput = newBlock.querySelector('.subtitle_input')

                    const newTextarea = newBlock.querySelector('textarea')

                    newSubTitleInput.value = el.subtitle
                    newTextarea.value = el.text

                    newBlockArticle.before(newBlock)
                }
            })
        }

        const tagsArray = previewContent.tags

        const addTagsBack = tagsArray.map(el => {

            const btn = document.createElement('button')
            btn.classList.add('tag_btn_chose')
            btn.textContent = el
            addedTagsBtn.push(el)
            return btn
        })

        blockChoseTag.innerHTML = ''
        addTagsBack.forEach(item => {
            blockChoseTag.append(item)
        })
        window.localStorage.removeItem('preview')
        window.localStorage.removeItem('srcImgFromFile')
    }
}

setValueAfterPreview()