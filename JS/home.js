const hamburger = document.getElementsByClassName('hamburger')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})