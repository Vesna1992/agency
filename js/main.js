const toggler = document.querySelector('.header__toggler')
const nav = document.querySelector('.header__nav')
const items = document.querySelectorAll('.header__item')
const features = document.querySelector('.features')

toggler.addEventListener('click', () => {
    toggler.classList.toggle('change-icon')
    nav.classList.toggle('display')
    items.forEach(item  => {
        item.classList.toggle('display')
    })
    features.classList.toggle('display')
})