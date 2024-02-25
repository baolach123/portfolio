const styleSitcherToggle = document.querySelector(".style-switcher-toggler");
styleSitcherToggle.addEventListener("click",()=>{
    
    document.querySelector(".style-switcher").classList.toggle("open");
})
// window.addEventListener("scroll", () =>{
//     if (document.querySelector(".style-switcher").classList.contains("open"))
//     {
//         document.querySelector(".style-switcher").classList.remove("open");   
//     }
// })
