
const navBackground = document.querySelector(".nav");

const checkScrolled = () => {
    if (window.scrollY > 0) {
        navBackground.classList.add("nav-active");
    } else {
        navBackground.classList.remove("nav-active");
    }
}

window.addEventListener("scroll", checkScrolled);
window.addEventListener("load", checkScrolled);


// nav mobile

const navMenu = document.querySelector(".nav__right")
const openBarsIcon = document.querySelector(".nav__icon__open__link");
const closeBarsIcon = document.querySelector(".nav__icon__close__link");
const socialMediaLInks = document.querySelector(".start__socialMedia");

const SwitchNavMobile = (e) => {
    e.preventDefault()
    navMenu.classList.toggle("nav__right-active");
    closeBarsIcon.classList.toggle("nav__icon__link-active");
    openBarsIcon.classList.toggle("nav__icon__link-active");
    socialMediaLInks.classList.toggle("start__socialMedia-active");
}

openBarsIcon.addEventListener("click", SwitchNavMobile)
closeBarsIcon.addEventListener("click", SwitchNavMobile)

const navElements = document.querySelectorAll(".nav__right__element");

navElements.forEach(element => {
    element.addEventListener("click", () => {
        navMenu.classList.toggle("nav__right-active");
        closeBarsIcon.classList.toggle("nav__icon__link-active");
        openBarsIcon.classList.toggle("nav__icon__link-active");
        socialMediaLInks.classList.toggle("start__socialMedia-active");
    })
});

