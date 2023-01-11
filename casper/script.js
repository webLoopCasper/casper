let arrow = document.querySelector("#down-arrow");
let burgerSubmenu = document.querySelector(".burger-submenu");


let burgerIcon = document.querySelector("#burgermenu-icon");
let menucontainer = document.querySelector(".menu-container");




burgerIcon.addEventListener("click", bigdropdownfun);

function bigdropdownfun(){
    menucontainer.classList.toggle("show")
}




arrow.addEventListener("click", dropdownfun);

function dropdownfun(){
    burgerSubmenu.classList.toggle("show")
}



let bgImage = document.querySelector("#big-image-element");



let img = document.querySelectorAll(".small-img");

for(var i = 0; i < img.length; i++) {
    img[i].addEventListener("click", clickfun);
}

function clickfun() {
   
    bgImage.src = this.src;
    

document.getElementsByClassName

}