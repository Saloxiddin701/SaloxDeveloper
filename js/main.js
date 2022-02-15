window.addEventListener('load', ()=> {
    const body = document.querySelector('body')
    const loadWrap = document.querySelector('.loader-wrapper')

    setTimeout(function () {
        body.classList.add('loaded')
        loadWrap.classList.add('no-js')
    })
})

AOS.init();
navbar = document.querySelector(".nav-item").querySelectorAll(".nav-link");
navbar.forEach(element => {
    element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove("active"))
        this.classList.add("active")
    })
});

window.addEventListener("scroll", function () {
    const navItem = document.querySelector('.header');
    navItem.classList.toggle("fixed", window.scrollY > 0);
})

const navItem = document.querySelector(".nav-item");
const burger = document.querySelector(".burger");
burger.addEventListener('click', mobileMenu);
function mobileMenu() {
    burger.classList.toggle("active");
    navItem.classList.toggle("active");
}

const bot = new Bot('5151400270:AAEjzlJ1kFzCBT4FRCfMrXai9lpGz63xnac', 1393665338)

document.querySelector('#form').addEventListener('submit', (e)=> {
    e.preventDefault()

    const text = document.querySelector('.inName').value
    const text1 = document.querySelector('.email').value
    const text2 = document.querySelector('.last').value
    const text3 = document.querySelector('.textarea').value
    bot.sendMessage(text).then(res => {
        console.log(res)
    })
    bot.sendMessage(text1).then(res => {
        console.log(res)
    })
    bot.sendMessage(text2).then(res => {
        console.log(res)
    })
    bot.sendMessage(text3).then(res => {
        console.log(res)
    })
})