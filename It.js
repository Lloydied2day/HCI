const redLight = document.getElementById('red');
const greenLight = document.getElementById('green');
const yellowLight = document.getElementById('yellow');


const redDuration = 3000;    
const greenDuration = 3000;  
const yellowDuration = 3000;


function changeLight(currentLight) {

    redLight.style.opacity = '0.3';
    greenLight.style.opacity = '0.3';
    yellowLight.style.opacity = '0.3';


    if (currentLight === 'red') {
        redLight.style.opacity = '1';
        setTimeout(() => changeLight('green'), redDuration);
    } else if (currentLight === 'green') {
        greenLight.style.opacity = '1';
        setTimeout(() => changeLight('yellow'), greenDuration); 
    } else if (currentLight === 'yellow') {
        yellowLight.style.opacity = '1';
        setTimeout(() => changeLight('red'), yellowDuration);
    }
}


changeLight('red');