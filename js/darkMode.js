
let darkModeSwitch = document.querySelector(".switch__checkbox")

// light mode in localStorage
if (localStorage.getItem("dark-mode") === "false") {
    document.body.classList.add("lightMode");
    darkModeSwitch.checked = false;
}


const IsDark = () => {
    let darkModeSwitchCheck = document.querySelector(".switch__checkbox")

    if (darkModeSwitchCheck.checked == true) {
        document.body.classList.remove("lightMode")   
        localStorage.setItem("dark-mode", "true")
    } 
    else {
        document.body.classList.add("lightMode")   
        localStorage.setItem("dark-mode", "false")
    } 

}

darkModeSwitch.addEventListener("click", IsDark)