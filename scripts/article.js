const logoBackHome = document.querySelector('.logo')

logoBackHome.addEventListener('click', () => {
    window.location.href = './../index.html'
})

const tagsListEl = document.querySelector('.tags_article')
const tagsListArray = ['Angular', 'Programmer']

tagsListEl.innerHTML = tagsListArray.map(el => `<button class='tags_article_btn'>${el}</button>`).join('')



const headerPanelBtn = document.querySelector('.header_panel_btn')

const userBtn = document.createElement('button')

userBtn.setAttribute('class', 'create_post')

userBtn.textContent='Sing in'

if(localStorage.getItem('test')) { //test

    userBtn.textContent = 'Create a Post'

    const headerPanelUser = document.createElement('div')

    headerPanelUser.setAttribute('class', 'header_panel_user')

    const userLogo = document.createElement('img')

    userLogo.setAttribute('alt', 'user logo')
    userLogo.setAttribute('src', '../img/user_logo.svg')

    headerPanelUser.append(userLogo)

    headerPanelBtn.after(headerPanelUser)

    userBtn.addEventListener('click', ()=> {
        window.location.href= '/pages/createArticle.html'
    })

} 

userBtn.addEventListener('click', ()=> {
    window.location.href= '/pages/singIn.html'
})

headerPanelBtn.append(userBtn)


