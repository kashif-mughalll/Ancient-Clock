var Minute_Needle = document.getElementById('minute-needle');
var Hours_Needle  = document.getElementById('hours-needle');
var Gear1  = document.getElementById('Gear1');
var Gear2  = document.getElementById('Gear2');
var audio = new Audio("./assest/Clock Sound.mp3");



// Current time Arr[0] Hours and Arr[1] for minue

var index = 0;
var Seconds = 0;

setInterval(() => {   
    audio.play();
    var Time = new Date().toLocaleTimeString();
    var Arr = Time.split(':');
    SetHours(Arr[0]);
    SetMinutes(Arr[1]);

    Gear1.style.transform = `rotate(${index}deg)`;
    Gear2.style.transform = `rotate(${-index}deg)`;
    index = index + 6;

    Seconds++;
}, 1000);



function SetHours(Hours){
    var Time = new Date().toLocaleTimeString();
    var Arr = Time.split(':');
    var Hours =  parseInt(Hours);
    Hours_Needle.style.transform = `rotate(${(180+(Hours*30)) + (parseInt(Arr[1])/2) }deg)`;
}


function SetMinutes(Minutes){
    
    var Minutes =  parseInt(Minutes);
    Minute_Needle.style.transform = `rotate(${(Minutes*6)+180}deg)`;
}

