'use strict';

let okay = 'Hi Man, this is just to know that everything is working fine!';
alert(okay);

function changeStateAtIntervals() {
    var h1 = document.querySelector('h1');
    var isGreen = false;

    setInterval(function () {
        if (isGreen) {
            h1.style.color = 'black';
        } else {
            h1.style.color = 'green';
        }
        isGreen = !isGreen
    }, 1000);
}

function changeElementColor() {
    let myColor = document.getElementById('myColor');
    myColor.textContent = 'Okay!';
    myColor.style.color = 'red';
    myColor.style.fontSize = '100px';
    myColor.style.fontFamily = 'Arial';

}

function greet() {
    //document.write('<dl><dd>');

    let day = new Date();
    let hr = day.getHours();
    
    if ((hr === 1) || (hr === 2) || (hr === 3) || (hr === 4) || (hr === 5)) {
        document.write('Should you not be sleeping?');
    } else if ((hr === 6) || (hr === 7) || (hr === 8) || (hr === 9) || (hr === 10) || (hr === 11)) {
        document.write('Good Morning!');
    } else if ((hr === 12)) {
        document.write('Let\'s have lunch?');
    } else if ((hr === 13) || (hr === 14) || (hr === 15) || (hr === 16) || (hr === 17)) {
        document.write('Good afternoon!');
    } else if ((hr === 18) || (hr === 19)) {
        document.write('Good late afternoon!');
    } else if ((hr === 20)) {
        document.write('Good Night');
        document.getElementById('night-container').style.display = 'inline';
    } else if ((hr === 21)) {
        document.write('Good Night');
        document.getElementById('night-container').style.display = 'none';
    } else if ((hr === 22)) {
        document.write('Good Night');
    } else if (hr === 23) {
        document.write('Oh My! It\'s almost midnight!');
    } else {
        document.write('Midnight!<br>It is already tomorrow!');
    }
    //document.write('</dl></dd>');
}
changeElementColor();
changeStateAtIntervals();
greet();