let bodyScroll = document.querySelector("html , body");
let navbar = document.querySelector(".navbar") ;
window.addEventListener("scroll" , ()=>{
    //  console.log(bodyScroll.scrollTop);
    // bodyScroll.scrollTop >= 200 ? navbar.classList.add("bg-light" ,"shadow") : navbar.classList.remove("bg-light" ,"shadow")
     if(bodyScroll.scrollTop >= 200){
        // console.log("done")
        navbar.classList.add("bg-light" ,"shadow")
     }else{
        //  console.log("sorry")
        navbar.classList.remove("bg-light" ,"shadow")
     }
})