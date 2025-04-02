var audio = ["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"]; 

//TO USE MOUSE PRESS
for( var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
//TO USE KEY BOARD PRESS
document.addEventListener("keypress", function(event){
    var buttonInnerHTML = event.key;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});

function makeSound(buttonInnerHTML)
{
    switch(buttonInnerHTML){
        case "W":
            var audio1 = new Audio(audio[0]);
            audio1.play();
            break;
        case "A":
            var audio2 = new Audio(audio[1]);
            audio2.play();
            break;
        case "S":
            var audio3 = new Audio(audio[4]);
            audio3.play();
            break;
        case "D":
            var audio4 = new Audio(audio[3]);
            audio4.play();
            break;
        case "J":
            var audio5 = new Audio(audio[2]);
            audio5.play();
            break;
        case "K":
            var audio6 = new Audio(audio[5]);
            audio6.play();
            break;
        case "L":
            var audio7 = new Audio(audio[6]);
            audio7.play();
            break;
        default:
            console.log(buttonInnerHTML);
       }
}
function buttonAnimation(activekey)
{
    var activebutton = document.querySelector("."+activekey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },400);
}