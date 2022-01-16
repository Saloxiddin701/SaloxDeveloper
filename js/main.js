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