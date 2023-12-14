// burger menu header
const headerMenu = document.querySelector(".header-menu");
document.querySelector(".menu-btn").addEventListener("click", function(){
    headerMenu.classList.add("active");
});

document.querySelector(".menu__exit-btn").addEventListener("click", function(){
    headerMenu.classList.remove("active");
});

window.addEventListener("resize", function(){
    if(headerMenu.offsetWidth >= 768) {
        headerMenu.classList.remove("active");
    };
});