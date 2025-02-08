console.log("sam")




let menu=document.querySelector('.context-menu')


console.log(menu)


document.addEventListener('contextmenu',function(event){
    
    event.preventDefault()
    menu.style.display='flex';

    menu.style.left=`${event.clientX}px`;
    menu.style.top = `${event.clientY}px`


    console.log(event)
})
document.addEventListener('dblclick',function(){
    menu.style.display='none';

})


