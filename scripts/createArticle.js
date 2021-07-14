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

    chooseTag.innerHTML = addTagInfo.map(el => `<button class='tags_btn'>
    <span class='add_tag_plus'><img src='../img/add_tag_plus.svg'></span>
    ${el}</button>`).join('')
}

selectTagForArticle()

const addTagsListBtn = document.querySelectorAll('.tags_btn')

const addedTagsBtn = []

const showSelectedTagForArticle = () => {

    const blockChoseTag = document.querySelector('.selected_tags')
    blockChoseTag.innerHTML = addedTagsBtn.map(el => {
        return `<button class='tag_btn_chose'>${el}</button>`
    }).join('')

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


inputFile.addEventListener('change', (event) => {

    let files = []

    if (!event.target.files.length) return

    files = Array.from(event.target.files)

    preview.innerHTML = ''

    img = files[0]

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

const getContentForNewArticle = () => {

    const contentArticle = []

    const subtitles = document.querySelectorAll('.subtitle_input')

    const textareas = document.querySelectorAll("textarea[name='article_text']")

    const userName = JSON.parse(window.localStorage.getItem('activeUser'))[0].displayName

    const currentDate = getCurrentDate()

    const id = Date.now()

    if (!inputTitle.value) {
        const warningForTitle = document.createElement('p')
        warningForTitle.classList.add('warning')
        warningForTitle.textContent = 'Article must have some title'
        warningForTitle.style.cssText = "color: red; margin-bottom: 10px"

        document.querySelector('.title_input').before(warningForTitle)
        return
    }

    

    const imgArticleRef = uploadImgToFirestorage()
    
    console.log(imgArticleRef)
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
        id: id,
        img: imgArticleRef
    }
    console.log(newArticle)
    return newArticle
}

const uploadImgToFirestorage = async () => {

    awiatfireStorage.ref(img.name).put(img).then((snapshot) => {
        console.log('Uploaded or file!')
    })

    await fireStorage.ref(img.name).put(img).snapshot.ref.getDownloadURL().then((url)=>{
        return url
    })
}

const addNewArticleToFirestoreDatabase = () => {

    const newArticle = getContentForNewArticle()

    if (!newArticle) return

    firestoreDatabase.collection("article").doc(newArticle?.title).set(newArticle)
        .then((docRef) => {
            console.log(true)
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        })
}

const publishBtn = document.querySelector('.publish_btn')

publishBtn.addEventListener('click', addNewArticleToFirestoreDatabase)