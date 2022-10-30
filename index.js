const btnEl = document.querySelector(".btn")
const mainEl = document.querySelector(".main-container")
const popupEl = document.querySelector(".popup-container")
const closeEL = document.querySelector(".close-icon")

btnEl.addEventListener("click", ()=>{
    mainEl.classList.add("active");
    popupEl.classList.remove("active")
})

closeEL.addEventListener('click',()=>{
    mainEl.classList.remove("active");
    popupEl.classList.add("active")
})
