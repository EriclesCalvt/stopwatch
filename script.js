var sec = 00;
var min= 00;
var hr = 00;

var interval 

function digits(digit){
    if(digit<10){
        return("0"+digit)
    }else{
        return(digit)
    }
}
function start(){
    interval = setInterval(watch, 1)
}

function paused(){
    clearInterval(interval)
}

function stoped(){
    clearInterval(interval)
    sec = 0;
    min = 0;
    document.getElementById('watch').innerText="00:00:00"
}

function watch(){
    sec++
    if(sec==60){
        min++;
        sec=00;
        if(min==60){
            hr++
            min=00;
        }
    }
    document.getElementById('watch').innerText=digits(hr)+":"+digits(min)+":"+digits(sec);
}