//Задача сделать валидацию формы. Перехватить событие отправки формы и отменить его, если при заполнении полей допущены ошибки. 
// //Проверку можно поставить простейшую - на пустоту полей. При обнаружении ошибки подсветить поле ввода красной рамкой.

//При вводе данных в поле рамка, указывающая на ошибка, сразу исчезает. 

let inputs = document.querySelectorAll('input.check');
let sendBtn = document.querySelector('.submit-btn');
let form=document.querySelector('form');
let inputValues;
let inputValue;



sendBtn.addEventListener('click', function(e){

inputValues=[];

inputs.forEach(input =>{

    inputValue = input.value;
    if(input.value == ""){
        input.classList.add('err');
    }

    inputValues.push(inputValue);
    
    
    if(input.classList.contains('err')){
        input.addEventListener('focus', function(){
            input.classList.remove('err')
        })
        
    }
})

if(inputValues.some(inputVal =>
    inputVal === ''
)){
    e.preventDefault();
}
   

})


