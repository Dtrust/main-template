function mobileMenu(parentSelector, menuBtn, menuSelector) {
    const body = document.body
    // const overlay = document.querySelector('.overlay')
    const element = document.querySelector(parentSelector)
    const navBtn = document.querySelector(menuBtn)
    const navList = element.querySelector(menuSelector)

    navBtn.addEventListener('click', () => {
        element.classList.toggle('active')
        body.classList.toggle('noscroll')
        // overlay.classList.toggle('show')
    })

    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !navBtn.contains(e.target) && element.classList.contains('active')) {
            element.classList.remove('active')
            body.classList.toggle('noscroll')
            // overlay.classList.toggle('show')
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && element.classList.contains('active')) {
            element.classList.toggle('active')
            body.classList.toggle('noscroll')
            // overlay.classList.toggle('show')
        }
    })
}

export default mobileMenu