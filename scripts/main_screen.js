const createPostBtn = document.querySelector('.create_post')
const tagsListEl = document.querySelector('.tags')
const tagsListArray = ['Angular', 'SAP ABAP', 'Java', 'Design', 'SAP TM Consultant', 'Frontend', 'Programmer', 'Python', 'DevOps']

createPostBtn.addEventListener('click', ()=> {
    window.location.href= '/pages/createArticle.html'
})
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
        
        el.style.cssText= `box-shadow: 0px 12px 24px rgba(227, 232, 240, 0.5)`

        window.location.href = 'pages/article.html'
    })
})

