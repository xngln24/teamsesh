// hello copilot can you write jquery code that displays a timer that starts counting at page load and displays and saves the time when the submit button is pressed.
const timer= document.getElementById("timer");
const submit= document.getElementById("submit");
let time=0;
let interval;
function startTimer(){
    interval = setInterval(function(){
        time++;
        timer.innerHTML=time;
    },1000);
}
function stopTimer(){
    clearInterval(interval);
}
startTimer();
submit.addEventListener("click",function(){
    stopTimer();
    console.log(time);
});

