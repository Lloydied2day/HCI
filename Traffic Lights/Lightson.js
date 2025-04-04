
function toggleLight(state) {
    const lightImage = document.getElementById('lightImage');
    
    if (state === 'on') {
        lightImage.src='Traffic Lights/on.png';
    } else {
        lightImage. src = 'Traffic Lights/off.png'; 
    }
}