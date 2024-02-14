let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;

document.getElementById('start').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector('.hr').innerText = '00';
    document.querySelector('.min').innerText = '00';
    document.querySelector('.sec').innerText = '00';
});

function startTimer() {
   seconds++;
   if(seconds == 60) {
       minutes++;
       seconds=0;
   }
   if(minutes == 60) {
       hours++;
       minutes=0;
   }
   
   document.querySelector('.hr').innerText = twoDigits(hours);
   document.querySelector('.min').innerText = twoDigits(minutes);
   document.querySelector('.sec').innerText = twoDigits(seconds);
}

function twoDigits(number) {
     return number < 10 ? `0${number}` : number.toString();
}