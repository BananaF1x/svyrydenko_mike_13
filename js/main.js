// burger menu
const headerMenu = document.querySelector(".header-menu");
document.querySelector(".menu-btn").addEventListener("click", function(){
    headerMenu.classList.add("active");
});
document.querySelector(".menu__exit-btn").addEventListener("click", function(){
    headerMenu.classList.remove("active");
});

// slayder
const teamTabs = document.querySelectorAll("div.team__tabs, span.team__list__point");
teamTabs.forEach((e)=>{
    if(e.classList.contains("team__list__point")) {
        e.addEventListener("click", function() {
            teamTabs.forEach((item) => {
                if(item.classList.contains("active-list")) item.classList.remove("active-list");
                if(item.classList.contains("active-tab")) item.classList.remove("active-tab");
            });
            e.classList.add("active-list");
            if(e.id == "1") document.querySelectorAll(".team__tabs")[0].classList.add("active-tab");
            if(e.id == "2") document.querySelectorAll(".team__tabs")[1].classList.add("active-tab");
            if(e.id == "3") document.querySelectorAll(".team__tabs")[2].classList.add("active-tab");
        });
    };
});