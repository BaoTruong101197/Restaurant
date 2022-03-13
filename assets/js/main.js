// Declaration variable
const headerToggle = document.querySelector('.header__toggle')
const navMenu = document.querySelector('.header__list')
const headerListItem = document.querySelectorAll('.header__link')
const header = document.getElementById('header')
const scrollToTop = document.querySelector('.scroll__web')
const theme = document.querySelector('.header__theme')
const iconTheme = document.querySelector('.header__theme i')

// Get theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.remove('dark-theme')
    iconTheme.classList.add('bx-sun')
} else {
    iconTheme.classList.remove('bx-sun')
    document.body.classList.add('dark-theme')
}

// Show header when user clicks toggle button
if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('show-header')) {
            navMenu.classList.remove('show-header')
        } else {
            navMenu.classList.add('show-header')
        }
    })
}



// Close nav header when user clicks header item
headerListItem.forEach(element => {
    element.addEventListener('click', () => {
        navMenu.classList.remove('show-header')
        return
    })
});

document.getElementById('main').addEventListener('click', () => {
    navMenu.classList.remove('show-header')
})

document.getElementById('footer').addEventListener('click', () => {
    navMenu.classList.remove('show-header')
})



// Show header shadow when user scroll pageY > 200
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('show-shadow-header')
        scrollToTop.classList.add('hidden-scroll')
    } else {
        header.classList.remove('show-shadow-header')
        scrollToTop.classList.remove('hidden-scroll')
    }
})

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

console.log(iconTheme)

// Change theme
theme.addEventListener('click', () => {
    navMenu.classList.remove('show-header')
    setTimeout(() => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme')
            iconTheme.classList.add('bx-sun')
            localStorage.setItem('theme', 'light')
        } else {
            document.body.classList.add('dark-theme')
            iconTheme.classList.remove('bx-sun')
            localStorage.setItem('theme', 'dark')
        }
    }, 100)
})



// Scroll reveal 
const sr = ScrollReveal({
    distance: '50px',
    origin: 'top',
    duration: 2000,
    reset: true
})

sr.reveal(`.about__content, .about__img, .home__content,
            .home__img, .services__list, .menu__list,
            .app__img, .contact__content, .contact__button`, {
    interval: 200
})