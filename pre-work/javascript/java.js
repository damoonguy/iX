
function playSound() {
    var mysound = document.getElementById("audio");
    mysound.play();
}

function stopSound() {
    var mysound = document.getElementById("audio");
    mysound.stop();
    mysound.currentTime = 0;
}
