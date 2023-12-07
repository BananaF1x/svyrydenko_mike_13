//Tabs team
const teamTabs = document.querySelectorAll("div.team__tabs, button.team__list__point");
teamTabs.forEach((e)=>{
    if(e.classList.contains("team__list__point")) {
        e.addEventListener("click", function() {
            teamTabs.forEach((item) => {
                if(item.classList.contains("active-list")) item.classList.remove("active-list");
                if(item.classList.contains("active-tab")) item.classList.remove("active-tab");
            });
            e.classList.add("active-list");
            if(e.id == "oleksandr-oleksandrovskyi") document.querySelectorAll(".team__tabs")[0].classList.add("active-tab");
            if(e.id == "oksana-kobzar") document.querySelectorAll(".team__tabs")[1].classList.add("active-tab");
            if(e.id == "evgeny-patrikov") document.querySelectorAll(".team__tabs")[2].classList.add("active-tab");
        });
    };
});

//Tabs oriented
const orientedTabs = document.querySelectorAll("div.oriented__container, button.oriented__btn");
orientedTabs.forEach((e)=>{
    if(e.classList.contains("oriented__btn")) {
        e.addEventListener("click", function() {
            orientedTabs.forEach((item) => {
                if(item.classList.contains("active-btn")) item.classList.remove("active-btn");
                if(item.classList.contains("active-container")) item.classList.remove("active-container");
            });
            e.classList.add("active-btn");
            if(e.id == "legal-services") document.querySelectorAll(".oriented__container")[0].classList.add("active-container");
            if(e.id == "protection") document.querySelectorAll(".oriented__container")[1].classList.add("active-container");
            if(e.id == "structuring") document.querySelectorAll(".oriented__container")[2].classList.add("active-container");
            if(e.id == "building") document.querySelectorAll(".oriented__container")[3].classList.add("active-container");
        });
    };
});