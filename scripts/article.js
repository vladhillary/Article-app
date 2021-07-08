const createPostBtn = document.querySelector('.create_post')
const logoBackHome = document.querySelector('.logo')

logoBackHome.addEventListener('click', () => {
    window.location.href = './../index.html'
})

createPostBtn.addEventListener('click', ()=> {
    window.location.href= './../pages/createArticle.html'
})

const tagsListEl = document.querySelector('.tags_article')
const tagsListArray = ['Angular', 'Programmer']

tagsListEl.innerHTML = tagsListArray.map(el => `<button class='tags_article_btn'>${el}</button>`).join('')