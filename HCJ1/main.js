function updateTime(){
    const now = new Date();
    const timeString = now.toLocaleTimeString();

    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

function changeColor(color){
    document.body.style.backgroundColor = color;
}

function showImg(img, text){
    document.getElementById("fig").src = img;
    document.getElementById("desc").textContent = text;
}

function hideImg(){
    document.getElementById("fig").src = "";
    document.getElementById("desc").textContent = "";
}