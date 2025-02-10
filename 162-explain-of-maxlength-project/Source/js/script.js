let inputText=document.querySelector('input')
let counterIcon=document.querySelector('.counter')
console.log(inputText,counterIcon)
let i
inputText.addEventListener('keyup',function(event){
    // for (i=0,i<19,i++){
        counterIcon.innerHTML=19-inputText.value.length

    // }

    


    // console.log()

})





