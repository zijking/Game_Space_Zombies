//global vars

//need to store the ratio
let ratio;
//need easy access to the width
let newWidth;

//function that gets called when game starts
$(window).load(function () {
  //need to grab an instance of our screen
  const div = $(window);
  //we can now work out the ratio
  ratio = div.width() / 1024; //while we are here we can grab the width for future use
  newWidth = div.width();

  //let’s apply the ratio to our elements
  main_call_setupContent(ratio);
});
