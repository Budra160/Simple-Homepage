const button = document.querySelector(".theme_switch");
const logo = document.querySelector(".logo");
const body = document.body;
const menu = document.querySelector(".nav_menu");
const menu_button = document.querySelector(".hamburger-button");
const menu_close = document.querySelector(".nav_close")

button.addEventListener("click", () => {

    let isDark = body.classList.contains("dark-theme");

    if(isDark == true){

        logo.src="resources/logo-light.svg";
        body.classList.remove("dark-theme")
        button.classList.remove("dark");
    }

    else{

        logo.src="resources/logo-dark.svg";
        body.classList.add("dark-theme")
        button.classList.add("dark");
    }

});

menu_button.addEventListener("click", () => {

    menu.style.width = "50%";

})

menu_close.addEventListener("click", () =>
{
    menu.style.width = "0px";
})
