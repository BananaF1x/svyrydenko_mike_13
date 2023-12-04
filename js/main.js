// popup
const introBtn = document.querySelector(".intro__btn");
const popupExitBtn = document.querySelector(".popup__exit-btn");
const popup = document.querySelector(".popup");
const entryPage = document.querySelector(".services-entry-page");
introBtn.addEventListener("click",function(){
    popup.style.display = "flex";
    entryPage.style.display = "none";
});
popupExitBtn.addEventListener("click",function(){
    popup.style.display = "none";
    entryPage.style.display = "block";
});