let play = document.querySelectorAll('.player__btn');

play[0].addEventListener('click', function player() {
    play[0].classList.toggle('active');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
})

play[1].addEventListener('click', function player() {
    play[1].classList.toggle('active');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
})

let music = new Audio()
let thisTime = document.querySelector('.player__timer-this');
let fullTime = document.querySelector('.player__timer-full');
let seekBar = document.querySelector('.player__bar-inner');

music.src = '../audio/Bright-Lights.mp3'

function getTimeFormat(time_var) {
    var sec_num = parseInt(time_var, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var sec = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (sec < 10) { sec = "0" + sec }

    if (hours == 0) {
        return minutes + ":" + sec;
    } else {
        return hours + ":" + minutes + ":" + sec;
    }
}

music.addEventListener('timeupdate', function () {
    let player_currentTime = getTimeFormat(music.currentTime);
    let player_duration = getTimeFormat(music.duration);
    let seek_width = music.currentTime * 100 / music.duration;

    thisTime.innerHTML = player_currentTime;
    fullTime.innerHTML = player_duration;
    seekBar.style.width = seek_width + "%";
});
