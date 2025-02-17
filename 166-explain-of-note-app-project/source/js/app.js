let colors=document.querySelector('#color-select')
let bgColor=document.querySelectorAll(".color-box")
let inputText=document.querySelector(".form-control")
let btnAdd=document.querySelector("#btn-save")
let fatherTags=document.querySelector("#listed")
let btnDelet=document.querySelector("#btn-delete")
// console.log(btnDelet)
// console.log(inputText)
let selectedColor = "#000000";  // رنگ پیش‌فرض

//   function addColor(){
    bgColor.forEach(function(event){
    // var color=event.style.backgroundColor
    event.addEventListener('click',function(){
        // console.log("san",bgColor,event.style.backgroundColor)

        selectedColor=event.style.backgroundColor
        inputText.style.backgroundColor=selectedColor
        // adderColorandText(color)
        
        
        // adderColorandText(event.style.backgroundColor)
        

    })
    
})
// }

// btnAdd.addEventListener('click',addColor)


// btnAdd.addEventListener('click',function(){
       
// })
btnAdd.addEventListener('click',function(){

    
        
        let newDiv=document.createElement('div')
        newDiv.className='card shadow-sm rounded'
        
        let newP=document.createElement('p')
        newP.className='card-text p-3'

        newP.style.backgroundColor=selectedColor
        newP.innerHTML=inputText.value
        
        newDiv.append(newP)
        fatherTags.append(newDiv)
        
        inputText.value=''
        // console.log(newDiv,newP)
    

})

btnDelet.addEventListener('click',function(){
    
    // console.log("delet")
    // console.log(fatherTags.lastChild)
    fatherTags.lastChild.remove()


})



