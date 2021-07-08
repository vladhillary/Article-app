const logoBackHome = document.querySelector('.logo')

logoBackHome.addEventListener('click', () => {
    window.location.href = './../index.html'
})

const addTagInfo = ['Angular', 'Design', 'SAP ABAP', 'Product Development', 'Web Disign', 'SAP TM Consultant', 'DevOps', 'UX/UI Design', 'Android', 'Frontend', 'Java', 'Programmer', 'Python']

const chooseTag = document.querySelector('.select_tag')

chooseTag.innerHTML = addTagInfo.map(el => `<button class='tags_btn'>
<span class='add_tag_plus'><img src='../img/add_tag_plus.svg'></span>
${el}</button>`).join('')

const addTagsListBtn = document.querySelectorAll('.tags_btn')

const addedTagsBtn = []

addTagsListBtn.forEach(el => {
    el.addEventListener('click', (event) => {

        const blockChoseTag = document.querySelector('.selected_tags')

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
        blockChoseTag.innerHTML = addedTagsBtn.map(el => {
            return `<button class='tag_btn_chose'>${el}</button>`
        }).join('')
    })
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

const addNewBlock = document.querySelector('.add_block')

addNewBlock.addEventListener('click', () => {

    const addNewBlockInputs = document.querySelector('.add_new_block_wrapper')

    let newBlock = addNewBlockInputs.cloneNode(true)
    
    addNewBlock.before(newBlock)
    
})
