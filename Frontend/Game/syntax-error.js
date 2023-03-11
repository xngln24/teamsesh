


var level1 = `

<p onclick="showWrong()">1. def multiply_integers(a, b):</p>
<p onclick="showWrong()">2. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp """</p>
<p onclick="showWrong()">3. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp Multiply two integers and return the result.</p>
<p onclick="showWrong()">4. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp """</p>
<p onclick="showWrong()">5. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if not isinstance(a, int) or not isinstance(b, int):</p>
<p onclick="showWrong()">6. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp raise TypeError("Both inputs must be integers")</p>
<p onclick="change(2)"> 7. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return a $ b</p>

`;

var level2 = `

<p onclick="showWrong()">1. def add_integers(a, b):</p>
<p onclick="showWrong()">2. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp """</p>
<p onclick="showWrong()">3. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp Add two integers and return the result.</p>
<p onclick="showWrong()">4. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp """</p>
<p onclick="change(3)">5. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp if not isinstance(a, BOOL) or not isinstance(b, INT):</p>
<p onclick="showWrong()">6. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp raise TypeError("Both inputs must be integers")</p>
<p onclick="showWrong()">7. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return a + b</p>

`;

var level3 = `

<p onclick="change(4)">1. define return_string(s)</p>
<p  onclick="showWrong()">2. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp return s</p>
<p onclick="showWrong()">3. my_string = return_string("Hello, world!")</p>
<p onclick="showWrong()">4. print(my_string)</p>

`;

var level4 = `

<p onclick="showWrong()">1. x = 5</p>
<p  onclick="change(5)">2. if x === 5:</p>
<p onclick="showWrong()">3. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp  print("x is equal to 5")</p>
<p onclick="showWrong()">4. else:</p>
<p onclick="showWrong()">5. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp  print("x is not equal to 5")</p>


`;

var level5 = `

<p onclick="showWrong()">1. a = [1, 2, 3]</p>
<p  onclick="showWrong()">2. b = a</p>
<p  onclick="showEnd()">3. if a equals b:</p>
<p onclick="showWrong()">4. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp  print("a and b refer to the same object")</p>
<p onclick="showWrong()">5. else:</p>
<p onclick="showWrong()">6. &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp  print("a and b do not refer to the same object")</p>


`;

document.getElementById("terminal").innerHTML = level1;


//there is a clock with an id of "clock" in the html file, make it count up by 1 every second
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


function change(x) {

    document.getElementById('levelCount').innerHTML = x + "/5"



    // show our pre made bootstrap modal with the id of "checkmarkModal" in vanilla javascript
    document.getElementById("checkmarkModal").style.display = "block";
    //make the script wait for 1 second before continuing
    setTimeout(function() {
        // hide the modal
        document.getElementById("checkmarkModal").style.display = "none";

        var chosenlevel;

    // create a switch statement that will change the value of the chosenlevel variable based on the value of the x parameter
    switch (x) {
        case 1:
            chosenlevel = level1;
            break;
        case 2:
            chosenlevel = level2;
            break;
        case 3:
            chosenlevel = level3;
            break;
        case 4:
            chosenlevel = level4;
            break;
        case 5:
            chosenlevel = level5;
            break;

        default:
            chosenlevel = level1;
    }

    document.getElementById("terminal").innerHTML = chosenlevel;

    }, 1000);

   
    
}

function showWrong(){
        // show our pre made bootstrap modal with the id of "wrongModal" in vanilla javascript
        document.getElementById("wrongModal").style.display = "block";

        //make the script wait for 1 second before continuing
        setTimeout(function() {
            // hide the modal
            document.getElementById("wrongModal").style.display = "none";
        }
        , 1000);

}

function showEnd(){

    


    document.getElementById("modalScore").innerHTML = "You finished in " + clock.innerHTML;

    // show our pre made bootstrap modal with the id of "endModal" in vanilla javascript
    document.getElementById("endModal").style.display = "block";

    // stop clock
    clearTimeout(t); 
 
   
}





