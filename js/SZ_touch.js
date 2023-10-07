//this function is called to reload our gun
// function reloadGun(e) {
//   //play the reload animation of our SS
//   $("#SZ0_1").animateSprite("play", "reload");
// }

//We need a flag to keep track to avoid repetition of animations before the first has finished
let canIclick = 0;
//this function is called to reload our gun
function reloadGun(e) {
  //Let’s check if we can allow this to occur
  if (canIclick == 0) {
    //looks like we can so we better set our flag
    canIclick = 1;
    $("#SZ0_1").animateSprite("play", "reload");
  }
}

//this function is called to fire our gun
function fireGun(e) {
//Let’s check if we can allow this to occur
 if(canIclick== 0){
 //looks like we can so we better set our flag
 canIclick=1;
 $("#SZ0_1").animateSprite("play", "fire");
 }
}