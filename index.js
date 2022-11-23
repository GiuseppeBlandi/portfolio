const hamMenuContainer= document.querySelector(".navbar_ham-menu-cont");
const hamMenuBtn= document.querySelector(".navbar_ham-menu");
const hamMenuCloseBtn= document.querySelector(".navbar_ham-menu-close");
const menu=document.querySelector(".navbar_mobile");

function openCloseMenu(){
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
        hamMenuBtn.classList.add("hidden");
        hamMenuCloseBtn.classList.remove("hidden"); 
    } else {
        menu.classList.add("hidden");
        hamMenuBtn.classList.remove("hidden");
        hamMenuCloseBtn.classList.add("hidden");  
    }
}


hamMenuContainer.addEventListener("click",openCloseMenu);
