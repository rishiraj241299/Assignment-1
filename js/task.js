var c=1;
setInterval(function(){

    document.getElementById('radio'+ c).checked=true;
    c++;
    if(c>4){
        c=1
    }
}, 5000);

function myFunction() {
    document.getElementById("xy").classList.toggle("abc");
    var x=document.querySelector(".bt");
    if(x.textContent=="show"){
        x.textContent="hide";
    }
    else{
        x.textContent="show";
    }
}


function my1Function() {
    var x = document.getElementById("btn");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
