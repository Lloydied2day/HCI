function turnOn() {
    document.getElementById('bulbImage').style.display = 'block'; // Show the "on" bulb image
    document.getElementById('offImage').style.display = 'none';  // Hide the "off" bulb image
}

function turnOff() {
    document.getElementById('bulbImage').style.display = 'none';  // Hide the "on" bulb image
    document.getElementById('offImage').style.display = 'block'; // Show the "off" bulb image
}
