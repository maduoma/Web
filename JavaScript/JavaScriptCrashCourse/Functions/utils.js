'use strict'; //It ensures that variables are declared e.g let name; not name

//Declare a function showMessage(greetings)
function showMessage(greetings){
    document.getElementById('greetings').textContent = greetings;
}

function demoFun(){
    const myP = document.getElementById('myP');
    myP.textContent = 'Greetings!';
    myP.style.color = 'blue';
    
    const myHello = document.getElementsByClassName('myHello');
    console.log(myHello);
    myHello[0].classList.add('d-none');
}