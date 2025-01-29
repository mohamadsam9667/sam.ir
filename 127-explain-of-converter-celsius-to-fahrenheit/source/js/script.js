let cantigrad=document.querySelector('.C');
let farenhaigt=document.querySelector('.F');
let inputTemp=document.getElementById('converter');


let changeBtn=document.querySelector('.changeButton');
let resetBtn=document.querySelector('.resetButton');
let convertBtn=document.querySelector('.convertButton');


let resault=document.querySelector('.result');

// console.log(cantigrad,farenhaigt,inputTemp,resetBtn,convertBtn,changeBtn); //for test select elements

resetBtn.addEventListener('click',function(){
    inputTemp.value='';
})

changeBtn.addEventListener('click',function(){
    changeValue();
})

convertBtn.addEventListener('click',function(){
    let tempF
    temp=inputTemp.value;
    if(temp!==''){
        
        if(cantigrad.className=='C'){
          
            tempF=(temp * (9/5) +(32))
            resault.innerHTML=temp + '°C to '+tempF+'°F'
            // inputTemp.value=''
        //   console.log(inputTemp.value)
            
        }else{
            tempF=Math.round((temp-32)*(5/9));
            resault.innerHTML=temp + '°F to '+tempF+'°C'

        }

    }else{
        console.log("error")
    }

})






function changeValue(){
    if(cantigrad.className=='C'){
        
        inputTemp.placeholder='°F'

        cantigrad.innerHTML='°F';
        farenhaigt.innerHTML='°C';
        
        cantigrad.className='F';
        farenhaigt.className='C';

    }else{

        inputTemp.placeholder='°C'
        
        cantigrad.innerHTML='°C';
        farenhaigt.innerHTML='°F';
        
        cantigrad.className='C';
        farenhaigt.className='F';


       
    
    }
};




