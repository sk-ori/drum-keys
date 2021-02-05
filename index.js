
//button event listener
var i = 0;
while (i < document.querySelectorAll(".drum").length) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttons = this.innerHTML;                 //identity of the button clicked
    playSound(buttons);
    buttonAnimation(buttons);
});
i++;
}

//keyboard event listener
document.addEventListener("keydown", function(press){
  playSound(press.key);            //when the event function is called it detects which key went down and if you see console.log(press), there are set of objects with itt among which key is one of them
  buttonAnimation(press.key);
})

//function for alocating sound for certain character
function playSound(keyboard){
  switch (keyboard) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    case "c":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "h":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "n":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    default:console.log(keyboard)

  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed")         //adding css class to javascript
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 120)
}
