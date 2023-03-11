// hello copilot can you write jquery code that displays a timer that starts counting at page load and displays and saves the time when the submit button is pressed.
const runbutton= document.getElementById("run");
const submitbutton= document.getElementById("submit");

var clock = document.getElementById("clock");
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    clock.innerHTML =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();

runbutton.addEventListener("click",function(){
// write javascript code that checks if query is correct and displays the output div if correct and displays a message if wrong
    if(document.getElementById("querybox").value=="select * from books"){
        console.log("correct");
        document.getElementById("output").style.visibility="visible";
    }
    else{
        console.log("wrong");
        document.getElementById("output").style.visibility="hidden";

        document.getElementById("msg").style.visibility="visible";
        document.getElementById("msg").innerHTML="Wrong Query, Try again";
    }

})
submitbutton.addEventListener("click",function(){
    if(document.getElementById("querybox").value=="select * from books"){
        console.log("correct");
        showEnd();
    }
    else{
        console.log("wrong");
        document.getElementById("msg").style.visibility="visible";
        document.getElementById("msg").innerHTML="Wrong Query, Try again";
    }
})

function showEnd(){
    // show our pre made bootstrap modal with the id of "endModal" in vanilla javascript
    document.getElementById("endModal").style.display = "block";
   
}



