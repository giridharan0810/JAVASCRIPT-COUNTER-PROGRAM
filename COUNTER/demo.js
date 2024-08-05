//COUNTER ON CLICK

let num=0;
document.getElementById("head").innerHTML=num;
function increase(){
    num++;
    document.getElementById("head").innerHTML=num;
}
function decrease(){
    num--;
    document.getElementById("head").innerHTML=num;
}
function reset(){
    num=0;
    document.getElementById("head").innerHTML=num;
}
