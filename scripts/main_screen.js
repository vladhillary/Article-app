const tagsListEl = document.querySelector('.tags')
const tagsListArray = ['Angular', 'SAP ABAP', 'Java', 'Design', 'SAP TM Consultant', 'Frontend', 'Programmer', 'Python', 'DevOps']


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
    userLogo.setAttribute('src', './img/user_logo.svg')

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


