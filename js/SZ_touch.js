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
  if (canIclick == 0) {
    //looks like we can so we better set our flag
    canIclick = 1;
    $("#SZ0_1").animateSprite("play", "fire");
  }
}

//array to keep track of the zombie hits
var zombieHits_counter = [0, 0, 0, 0, 0, 0];

//array for each zombies limit
var zombieHits_limits = [2, 1, 3, 2, 1, 3];
//this function will keep track of the zombie hits and actaccordingly;
function zombieHit(whichOne) {
  //increment the counter
  zombieHits_counter[whichOne]++;
  //check to see if this zombie has reached its limit
  if (zombieHits_counter[whichOne] >= zombieHits_limits[whichOne]) {
    //reset this zombie
    SZ_resetZombie(whichOne + 1);
  }
}
