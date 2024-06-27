//RELÓGIO DE PONTEIRO
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick () {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
};

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
};

setInterval(clockTick, 1000);


//RELÓGIO DIGITAL
const hor = document.getElementById('hor');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const clockDigital = setInterval(function time () {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) {h =  "0" + h};
    if (m < 10) {m =  "0" + m};
    if (s < 10) {s =  "0" + s};

    hor.textContent = h;
    min.textContent = m;
    sec.textContent = s;
});

//Mudar o Background de acordo com a hora (Dia/Noite)
window.onload = function() {
    const videoContainer = document.getElementById('video-container');
    const date = new Date();
    const hour = date.getHours();
    let videoPath;

    if (hour >= 6 && hour < 18) {
        videoPath = 'image/day.mp4';
    } else {
        videoPath = 'image/nigth.mp4';
    }

    videoContainer.innerHTML = '';

    const newVideo = document.createElement('video');
    newVideo.autoplay = true;
    newVideo.muted = true;
    newVideo.loop = true;
    newVideo.id = 'video-background';

    const newSource = document.createElement('source');
    newSource.src = videoPath;
    newSource.type = 'video/mp4';

    newVideo.appendChild(newSource);
    videoContainer.appendChild(newVideo);
};

//Botões Para alternar entre os relógios
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementById('toggleButton');
    const divs = document.querySelectorAll('.clocks')
    let currentIndex = 0;

    divs[currentIndex].classList.add('active');

    buttons.addEventListener('click', () => {
        divs[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % divs.length;
        divs[currentIndex].classList.add('active');
    })
})
