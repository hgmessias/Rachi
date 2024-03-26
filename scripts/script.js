const nav = document.querySelector(".header-style__links");
const btnNav = document.getElementById("handlerNavebar");

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector(".header-style__links").classList.add("hidden");
    document.getElementById("handlerNavebar").addEventListener("click",function(){
    document.querySelector(".header-style__links").classList.remove("hidden");
    btnNav.addEventListener("click", () => {
        nav.classList.toggle("open")
    })    
    })
})