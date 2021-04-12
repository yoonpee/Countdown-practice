const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears = '24 Apr 2021';

function countDown(){
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);
    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours =Math.floor(totalSeconds / 3600) % 24;
    const mins =Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    

    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
     return time < 10 ? (`0${time}`) : time;
}
countDown();

setInterval(countDown, 1000);