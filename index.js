var Minute_Needle = document.getElementById('minute-needle');
var Hours_Needle  = document.getElementById('hours-needle');
var Gear1  = document.getElementById('Gear1');
var Gear2  = document.getElementById('Gear2');
sound("./assets/Clock Sound.mp3");
var Time = new Date().toLocaleTimeString();
var Arr = Time.split(':');
SetHours(Arr[0]);
SetMinutes(Arr[1]);


var index = 0;
var Seconds = 0;

setInterval(() => {   
    play();
    var Time = new Date().toLocaleTimeString();
    var Arr = Time.split(':');
    SetHours(Arr[0]);
    SetMinutes(Arr[1]);
    document.getElementById('Hourss').innerHTML = Arr[0];
    document.getElementById('Minutes').innerHTML = Arr[1];
    document.getElementById('Seconds').innerHTML = Arr[2].substr(0,2);
    Gear1.style.transform = `rotate(${index}deg)`;
    Gear2.style.transform = `rotate(${-index}deg)`;
    index = index + 6;

    Seconds++;
}, 998);



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


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

