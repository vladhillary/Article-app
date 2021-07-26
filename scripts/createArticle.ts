import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage'

interface newArticle {
    title: string
    content: {
        subtitle: string
        text: string
    }[]
    tags: string[]
    user: string
    date: string
    id: number
}

var firebaseConfig = {
    apiKey: "AIzaSyBz5rkxIf23dLVC4braw1ahuVbzGBmeHiE",
    authDomain: "leverxangular2021.firebaseapp.com",
    projectId: "leverxangular2021",
    storageBucket: "leverxangular2021.appspot.com",
    messagingSenderId: "332942002633",
    appId: "1:332942002633:web:02810808ceb15f2407c018"
}
firebase.initializeApp(firebaseConfig)

let img:any;
let firestoreDatabase = firebase.firestore()
let fireStorage = firebase.storage()

const logoBackHome: Element = document.querySelector('.logo')

const backToHome = (): void => {
    window.location.href = './../index.html'
}

logoBackHome.addEventListener('click', backToHome)

const inputTitle: HTMLInputElement = document.querySelector('.title_input')

const removeWarningForTitle = (): void => {

    const warningForTitle: Element = document.querySelector('.warning')

    if (inputTitle.value !== '') warningForTitle?.remove()
}

inputTitle.addEventListener('input', removeWarningForTitle)

const showUserPhoto = (): void => {

    const userPhoto = document.querySelector("img[alt='user logo']")

    const activeUserInfo = JSON.parse(window.localStorage.getItem('activeUser'))

    userPhoto.setAttribute('src', activeUserInfo[0].photoURL)
}

if (window.localStorage.getItem('activeUser')) {

    showUserPhoto()
}

const addTagInfo: string[] = ['Angular', 'Design', 'SAP ABAP', 'Product Development', 'Web Disign', 'SAP TM Consultant', 'DevOps', 'UX/UI Design', 'Android', 'Frontend', 'Java', 'Programmer', 'Python']

const chooseTag: Element = document.querySelector('.select_tag')

const selectTagForArticle = (): void => {

    const btnArray: HTMLButtonElement[] = addTagInfo.map((el: string) => {

        const btn: HTMLButtonElement = document.createElement('button')
        btn.classList.add('tags_btn')
        const span: HTMLSpanElement = document.createElement('span')
        span.classList.add('add_tag_plus')
        btn.textContent = el
        const plusIco: HTMLImageElement = document.createElement('img')
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

const addTagsListBtn: NodeListOf<Element> = document.querySelectorAll('.tags_btn')

const addedTagsBtn: string[] = []

const blockChoseTag: Element = document.querySelector('.selected_tags')

const deleteChosedTag = (e: any): void => {

    const btnContent: string = e.target.textContent
    e.target.remove()
    addedTagsBtn.forEach((el, index) => {
        if (btnContent == el) {
            addedTagsBtn.splice(index, 1)
        }
    })
}

const showSelectedTagForArticle = (): void => {

    const btnArray: HTMLButtonElement[] = addedTagsBtn.map(el => {

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

const checkMouseTarget = (event: any): void => {

    if (event.target.classList.contains('tags_btn')) {

        let textOfTag: string = event.target.textContent

        if (addedTagsBtn.indexOf(textOfTag) == -1) {
            addedTagsBtn.push(textOfTag)
        }
    }
    if (event.target.hasAttribute('src')) {

        let textOfTag: string = event.target.parentElement.parentElement.textContent

        if (addedTagsBtn.indexOf(textOfTag) == -1) {
            addedTagsBtn.push(textOfTag)
        }
    }

    if (event.target.classList.contains('add_tag_plus')) {

        let textOfTag: string = event.target.parentElement.textContent

        if (addedTagsBtn.indexOf(textOfTag) == -1) {
            addedTagsBtn.push(textOfTag)
        }
    }

    showSelectedTagForArticle()
}

addTagsListBtn.forEach(el => {
    el.addEventListener('click', checkMouseTarget)
})

const inputFile: HTMLInputElement = document.querySelector('#show')
const preview: Element = document.querySelector('.preview_img')

const bytesToSize = (bytes: number): string => {

    const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB']

    if (!bytes) return '0 Byte'

    const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`)
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}

const removeWarningForImg = (): void => {

    const warningForTitle: Element = document.querySelector('.warning_img')

    warningForTitle?.remove()
}

inputFile.addEventListener('change', (event: any) => {

    let files:any = []

    if (!event.target.files.length) return

    files = Array.from(event.target.files)

    preview.innerHTML = ''

    img = files[0]

    if (img) removeWarningForImg()

    files.forEach((el:any) => {

        if (!el.type.match('image')) return

        const reader: FileReader = new FileReader()

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

    const removeHandler = (e:any): void => {

        if (!e.target.dataset.name) return

        const { name } = e.target.dataset

        files = files.filter((el:any) => el.name !== name)

        const block = preview.querySelector(`[data-name='${name}']`).closest('.preview_img_block')

        block.remove()
    }

    preview.addEventListener('click', removeHandler)
})

const newBlockArticle: Element = document.querySelector('.add_block')

const addNewBlockArticle = (): void => {

    const addNewBlockInputs: Element = document.querySelector('.add_new_block_wrapper')

    let newBlock: any = addNewBlockInputs.cloneNode(true)

    const newSubTitleInput: HTMLInputElement = newBlock.querySelector('.subtitle_input')

    const newTextarea: HTMLTextAreaElement = newBlock.querySelector('textarea')

    newSubTitleInput.value = ''
    newTextarea.value = ''

    newBlockArticle.before(newBlock)
}

newBlockArticle.addEventListener('click', addNewBlockArticle)

const getCurrentDate = (): string => {

    const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let currentDate: Date = new Date()

    let dateString: string = ''

    dateString = `${monthNames[currentDate.getMonth() + 1]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`

    return dateString
}

const checkImg = () => {

    if (!img) {

        const warningForImg: HTMLParagraphElement = document.createElement('p')
        warningForImg.classList.add('warning_img')
        warningForImg.textContent = 'Article must have some picture'
        warningForImg.style.cssText = "color: red; margin-bottom: 10px; font-weight: bold"
        if (!document.querySelector('.warning_img')) {
            document.querySelector('.upload_img').before(warningForImg)
        }

        return
    }
    return true
}

const uploadImgToFirestorage = async (newArticle:newArticle) => {

    let warningImg: boolean = checkImg()

    if (!warningImg) return

    await fireStorage.ref(img?.name).put(img)

    await fireStorage.ref(img?.name).put(img).snapshot.ref.getDownloadURL().then((url: any) => {

        let getArticleForUpdate = firestoreDatabase.collection('article').doc(newArticle.title)

        getArticleForUpdate.update({
            title: newArticle.title,
            content: newArticle.content,
            tags: newArticle.tags,
            user: newArticle.user,
            date: newArticle.date,
            id: newArticle.id,
            img: url
        }).catch((error: never) => {
            console.error("Error updating document: ", error)
        })
    })
    backToHome()
    window.localStorage.removeItem('srcImgFromFile')
}

const checkInputTitle = () => {

    if (!inputTitle.value) {

        const warningForTitle: HTMLParagraphElement = document.createElement('p')
        warningForTitle.classList.add('warning')
        warningForTitle.textContent = 'Article must have some title'
        warningForTitle.style.cssText = "color: red; margin-bottom: 10px; font-weight: bold"
        if (!document.querySelector('.warning')) {
            document.querySelector('.title_input').before(warningForTitle)
        }

        return
    }
    return true
}

const getContentForNewArticle = () => {

    let warningTitle: boolean = checkInputTitle()

    if (!warningTitle) return

    const contentArticle: { subtitle: string, text: string }[] = []

    const textareas: NodeListOf<HTMLInputElement> = document.querySelectorAll("textarea[name='article_text']")

    const userName: string = JSON.parse(window.localStorage.getItem('activeUser'))[0].displayName

    const subtitles: NodeListOf<HTMLInputElement> = document.querySelectorAll('.subtitle_input')

    const currentDate: string = getCurrentDate()

    const id: number = Date.now()

    const subtitlesLength: number = subtitles.length

    for (let i = 0; subtitlesLength > i; i++) {

        const contentBlock: {subtitle: string,text: string} = {
            subtitle: subtitles[i].value,
            text: textareas[i].value
        }
        contentArticle.push(contentBlock)
    }

    const newArticle: newArticle = {
        title: inputTitle.value,
        content: contentArticle,
        tags: addedTagsBtn,
        user: userName,
        date: currentDate,
        id: id
    }

    return newArticle
}

const addNewArticleToFirestoreDatabase = (): void => {

    const newArticle = getContentForNewArticle()

    uploadImgToFirestorage(newArticle)
    if (!newArticle) return

    firestoreDatabase.collection("article").doc(newArticle?.title).set(newArticle)
        .catch((error: never) => {
            console.error("Error adding document: ", error)
        })
}

const publishBtn: Element = document.querySelector('.publish_btn')

publishBtn.addEventListener('click', addNewArticleToFirestoreDatabase)

const previewBtn: Element = document.querySelector('.preview_btn')

const showPreview = (): void => {

    let warningImg = checkImg()
    if (!warningImg) return

    let warningTitle = checkInputTitle()
    if (!warningTitle) return

    const contentForPreview = getContentForNewArticle()

    window.localStorage.setItem('preview', JSON.stringify(contentForPreview))
    window.location.href = '../pages/article.html'
}

previewBtn.addEventListener('click', showPreview)

const setValueAfterPreview = (): void => {

    if (window.localStorage.getItem('preview')) {

        const previewContent = JSON.parse(window.localStorage.getItem('preview'))

        const amoutContent:{subtitle: string, text: string}[] = previewContent.content

        if (amoutContent.length > 1) {

            amoutContent.forEach((el:{subtitle:string, text: string}, index:number) => {
                if (index !== 0) {
                    const addNewBlockInputs = document.querySelector('.add_new_block_wrapper')

                    let newBlock:any = addNewBlockInputs.cloneNode(true)

                    const newSubTitleInput:HTMLInputElement = newBlock.querySelector('.subtitle_input')

                    const newTextarea:HTMLTextAreaElement = newBlock.querySelector('textarea')

                    newSubTitleInput.value = el.subtitle
                    newTextarea.value = el.text

                    newBlockArticle.before(newBlock)
                }
            })
        }

        const tagsArray:string[] = previewContent.tags

        const addTagsBack:HTMLButtonElement[] = tagsArray.map(el => {

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