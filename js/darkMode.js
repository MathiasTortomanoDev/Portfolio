
let darkModeSwitch = document.querySelector(".switch__checkbox")

const IsDark = () => {
    let darkModeSwitchCheck = document.querySelector(".switch__checkbox")

    if (darkModeSwitchCheck.checked == true) {
        document.body.classList.remove("lightMode")   
    } 
    else {
        document.body.classList.add("lightMode")   
    } 

}

darkModeSwitch.addEventListener("click", IsDark)