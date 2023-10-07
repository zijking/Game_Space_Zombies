//main function
function main_call_setupContent(ratio) {
  //need to resize all elements
  //first we set their normal sizes in CSS
  //Gun
  $("#SZ0_1").css("width", 150 * ratio);
  $("#SZ0_1").css("height", 150 * ratio);
  //Reload Button
  $("#SZ0_2").css("width", 200 * ratio);
  $("#SZ0_2").css("height", 90 * ratio);
  //Score
  $("#SZ0_3").css("width", 235 * ratio);
  $("#SZ0_3").css("height", 100 * ratio);
  //Any sprite sheets?
  //Our Gun
  setup_gun_SS();

//Create all our 6 zombies
 for (i = 1; i < 7; i++) {
 //this will get called 6 times
 SZ_createZombie(i);
 }
}
