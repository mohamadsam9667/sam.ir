
let mainNav=document.querySelector('#mainNav')


document.addEventListener("scroll",function(event){
    if(document.documentElement.scrollTop>0){

        console.log(document.documentElement.scrollTop)
        mainNav.style.height="64px";
        mainNav.classList.add("bg-black")
        mainNav.classList.add("txt-white")
    }else{
        mainNav.style.height="84px";

        mainNav.classList.remove("bg-black")
        mainNav.classList.remove("txt-white")

    }
    
})


console.log(mainNav)









