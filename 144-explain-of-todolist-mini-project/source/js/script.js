let $=document;
let inputTodo=$.querySelector('.form-control');
let fathetTodo=$.querySelector('.list-group')
//  console.log(fathetTodo,inputTodo) //for test selects


inputTodo.addEventListener('keydown',function(event){
    if(event.keyCode=='13'){
        event.preventDefault()
        
        let newLiFather=$.createElement('li');
        newLiFather.className='list-group-item d-flex justify-content-between align-items-center';
        
        let newSpan=$.createElement('span')
        newSpan.innerHTML=event.target.value
        
        let newIcon=$.createElement('i')
        newIcon.className='fa fa-trash-o delete'

        newLiFather.append(newSpan,newIcon)
        fathetTodo.append(newLiFather)

        console.log(newLiFather)
        // console.log(event.target.value,newLi)


        inputTodo.value=""

    }
    // console.log(inputTodo.value)
})



