function setup() {
    const logo = document.querySelector(".image-logo-bg");
    const txt = document.querySelector(".slogan");

    if (logo.classList.contains("load")) {
        logo.classList.remove("load");
        txt.classList.remove("show-text");
    } else {
        logo.classList.add("load");
        txt.classList.add("show-text");
    }
}

window.onload = function(){
    setup();
}