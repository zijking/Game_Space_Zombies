//let’s create a zombie
function SZ_createZombie(whichOne) {
  //create a new div to hold the zombie SS
  var div = document.createElement("div");
  //we need to hard code the CSS styles we want
  div.setAttribute("style", "position: fixed; top:0; left:0;");
  //we want to position our zombie exactly at the tip of the planet
  var top_position = $("#SZ0_0").height() * 0.435;
  //Xpos can be anywhere on our x axis
  var left_position =
    Math.floor(Math.random() * $("#SZ0_0").width() - ratio * 50) + ratio * 50;
  //let's position our zombie
  div.style.left = left_position + "px";
  div.style.top = top_position + "px";
  //give it an id
  div.id = "zombie" + whichOne;
  //finally let's add our zombie to the screen
  document.body.appendChild(div);

  //put this new zombie through our SS function
  setup_zombie_SS(whichOne);
  //put this new zombie through our animate function
  SZ_animateZombie(whichOne);
}

//let’s animate our zombie towards us
function SZ_animateZombie(whichOne) {
  //assign the speed for each of our zombies
  var timex = [13000, 8000, 16000, 14000, 10000, 18000];
  //assign a user friendly name for our div
  var $zombiex = $("#zombie" + whichOne);

  //reset the zombies scale value
  $zombiex.css("transform", "scale(" + 0 + ")");

  //work out the amount the zombie has to come towards us
  var amty = $(window).height() * 0.7; // -($zombiex.height()*2));//topx);
  //each type of zombie will have their own walking style
  var ZS_ease = [
    "easeInSine",
    "easeOutQuart",
    "easeInOutQuad",
    "easeInSine",
    "easeOutQuart",
    "easeInOutQuad",
  ];
  //finally we are ready to animate
  $zombiex.delay(timex[whichOne - 1] / 3).animate(
    {
      //first bring our zombie slowly down the screen
      left: amty + "px",
    },
    {
      easing: ZS_ease[whichOne - 1],
      duration: timex[whichOne - 1],
      step: function (now, fx) {
        //at each step we can manipulate the scale of our zombie
        if (fx.prop == "left") {
          //work out the amount to scale
          var xx = fx.pos * 16;
          //do a check to see if we should end this animation
          if (xx > 15) {
            //stop all animation
            $(this).stop();
            //call a function to reset this zombie
            SZ_resetZombie(whichOne);
          } else {
            //apply the scale
            $(this).css("transform", "scale(" + xx + ")");
          }
        }
      },
      complete: function () {},
    }
  );
}

//a function to completely reset our zombie
function SZ_resetZombie(whichOne) {
  //assign a user friendly name for our div
  var $zombiex = $("#zombie" + whichOne);
  //we want to position our zombie exactly at the tip of the  planet;
  var top_position = $("#SZ0_0").height() * 0.435;

  //Xpos can be anywhere on our x axis
  var left_position =
    Math.floor(Math.random() * $("#SZ0_0").width() - ratio * 50) + ratio * 50;
  //let's re-position our zombie
  $zombiex.css({ top: top_position + "px", left: left_position + "px" });
  //finally let’s make the zombie come towards the screen again
  SZ_animateZombie(whichOne);
}
