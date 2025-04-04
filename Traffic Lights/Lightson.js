
function toggleLight(state) {
    const lightImage = document.getElementById('lightImage');
    if (state === 'on') {
        lightImage.src ='on.jpg';  
    } else {
        lightImage.src ='off.jpg'; 
}

}