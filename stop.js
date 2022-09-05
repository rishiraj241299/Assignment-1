var hour=00;
var sec=00;
var min=00;
var Outputhour=document.getElementById('hour');
var Outputmin=document.getElementById('min');
var Outputsecond=document.getElementById('sec');
var buttonstart=document.getElementById('btn-start');
var buttonlap=document.getElementById('btn-lap');
var buttonreset=document.getElementById('btn-reset');
var buttonlap=document.getElementById('btn-lap');
var lap=document.getElementById('laps');
var interval
buttonstart.addEventListener('click',()=>{
    clearInterval(interval);
    interval=setInterval(startTime,10);
    
    if(buttonstart.textContent=="start"){
        buttonstart.textContent="stop";

    }
    else{
        buttonstart.textContent="start";
        clearInterval(interval);
    }


});
buttonlap.addEventListener('click',()=>{
    lap.innerHTML+="<li>"+Outputhour.innerHTML+":"+ Outputmin.innerHTML+":"+ Outputsecond.innerHTML+"</li>"    ;

});
     
// buttonstop.addEventListener('click',()=>{
//     clearInterval(interval);
// });
buttonreset.addEventListener('click',()=>{
    clearInterval(interval);
    hour ="00";
    min ="00";
    sec ="00";
    Outputhour.innerHTML=hour;
    Outputmin.innerHTML=min;
    Outputsecond.innerHTML=sec;
    lap.innerHTML=" ";


})

function startTime(){
    sec++;
    if(sec>99){
        sec = 00;
        min++;
        if(min<10){
            Outputmin.innerHTML ="0"+min;
        }
        else{
            Outputmin.innerHTML =+min;
        }
        
    }
    if(min>60){
        min=00;
        hour++;
        Outputhour.innerHTML="0"+hour;
    }
   if(sec<10){
    Outputsecond.innerHTML="0"+sec;
   }
   else{
    Outputsecond.innerHTML=sec;
   }
}
