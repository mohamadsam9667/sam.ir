

// console.log("sam")



let btnUser=document.querySelector('button')
let modalActive=document.querySelector('.modal-parent')
let btnExite=document.querySelector('.X')

btnExite.addEventListener('click',function(){
    modalActive.style.display='none';

})


btnUser.addEventListener('click',function(){
    
    console.log(btnUser,modalActive)
    modalActive.style.display='inline';

})



