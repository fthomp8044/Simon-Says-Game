
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function(){
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //This will push any selected color btn to my array list
  playSound(userChosenColour);

  // console.log(userClickedPattern);
})

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

};

function playSound(name){
  let audio = new Audio("sounds/" + name + "mp3");
  audio.play();
}
