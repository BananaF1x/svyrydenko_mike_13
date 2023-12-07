// popup
const popup = document.querySelector(".popup");
const entryPage = document.querySelector(".services-entry-page");
document.querySelector(".intro__btn").addEventListener("click",function(){
    popup.style.display = "flex";
    entryPage.style.display = "none";
});
document.querySelector(".popup__exit-btn").addEventListener("click",function(){
    popup.style.display = "none";
    entryPage.style.display = "block";
});