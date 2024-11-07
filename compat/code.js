//Make Variables

//This group of variables is the first user's ID and characteristics
var len1 = 0;
var out1 = 0;
var car1 = 0;
var dep1 = 0;
var mor1 = 0;
var col1 = 0;
var id1 = "000000";

//This group of variables is the second user's ID and characteristics
var len2 = 0;
var out2 = 0;
var car2 = 0;
var dep2 = 0;
var mor2 = 0;
var col2 = 0;
var id2 = "000000";

//This group of variables is for the compatibility between the users
var comp1 = 0;
var comp2 = 0;
var comp3 = 0;
var comp4 = 0;
var comp5 = 0;
var comp6 = 0;
var output = "";

//onEvents for all of the first screen, updates variables when sliders are slid
onEvent("lengthSlider", "input", function( ) {
  len1 = getNumber("lengthSlider");
  setText("lenlab", len1);
  updateId(1);
});

onEvent("outgoingSlider", "input", function( ) {
  out1 = getNumber("outgoingSlider");
  setText("outlab", out1);
  updateId(1);
});

onEvent("caringSlider", "input", function( ) {
  car1 = getNumber("caringSlider");
  setText("carlab", car1);
  updateId(1);
});

onEvent("deepSlider", "input", function( ) {
  dep1 = getNumber("deepSlider");
  setText("deplab", dep1);
  updateId(1);
});

onEvent("morningSlider", "input", function( ) {
  mor1 = getNumber("morningSlider");
  setText("morlab", mor1);
  updateId(1);
});

onEvent("coldSlider", "input", function( ) {
  col1 = getNumber("coldSlider");
  setText("collab", col1);
  updateId(1);
});

onEvent("passButton", "click", function( ) {
  setScreen("friendScreen");
});

//onEvents for all of the second screen
onEvent("lengthSlider2", "input", function( ) {
  len2 = getNumber("lengthSlider2");
  setText("lenlab2", len2);
  updateId(2);
});

onEvent("outgoingSlider2", "input", function( ) {
  out2 = getNumber("outgoingSlider2");
  setText("outlab2", out2);
  updateId(2);
});

onEvent("caringSlider2", "input", function( ) {
  car2 = getNumber("caringSlider2");
  setText("carlab2", car2);
  updateId(2);
});

onEvent("deepSlider2", "input", function( ) {
  dep2 = getNumber("deepSlider2");
  setText("deplab2", dep2);
  updateId(2);
});

onEvent("morningSlider2", "input", function( ) {
  mor2 = getNumber("morningSlider2");
  setText("morlab2", mor2);
  updateId(2);
});

onEvent("coldSlider2", "input", function( ) {
  col2 = getNumber("coldSlider2");
  setText("collab2", col2);
  updateId(2);
});

onEvent("passBackButton", "click", function( ) {
  setScreen("outputScreen");
  updateId(3);
  //Checks the compatibility
  checkFriendship();
});

onEvent("tryAgainButton", "click", function( ) {
  setScreen("mainScreen");
});

//Updates the id at the bottom of the screen
function updateId(num) {
  //If 1 is inputted, the ID on the first screen is updated
  if (num == 1) {
    id1 = len1.toString() + out1.toString() + car1.toString() + dep1.toString() + mor1.toString() + col1.toString();
    setText("id", id1);
  }
  //If 2 is inputted, the ID on the second screen is updated
  else if (num == 2) {
    id2 = len2.toString() + out2.toString() + car2.toString() + dep2.toString() + mor2.toString() + col2.toString();
    setText("id2", id2);
  }
  //If 1 is inputted, the ID on the third screen is updated
  else if (num == 3) {
    id1 = len1.toString() + out1.toString() + car1.toString() + dep1.toString() + mor1.toString() + col1.toString();
    id2 = len2.toString() + out2.toString() + car2.toString() + dep2.toString() + mor2.toString() + col2.toString();
    setText("id3", id1 + ", " + id2);
  }
}

//Calculates the compatibility of the two friends
function checkFriendship(){
  //checks if they have been friends a long time.
  if (len1+len2 >= 8) {
    comp1 = 1;
  }
  else {
    comp1 = 0;
  }
  
  //checks if their outgoingness is either close or far
  if (Math.abs(out1 - out2) <= 2 || Math.abs(out1-out2) >=5) {
    comp2 = 1;
  }
  else {
    comp2 = 0;
  }
  
  //checks if their caring is low or high
  if (car1 + car2 >= 12 || car1 + car2 <= 6) {
    comp3 = 1;
  }
  else {
    comp3 = 0;
  }
  
  //checks if their ideas about deep thoughts are similar
  if (Math.abs(dep1 - dep2) <= 3) {
    comp4 = 1;
  }
  else {
    comp4 = 0;
  }
  
  //checks if their ideas about mornings are similar
  if (Math.abs(mor1 - mor2) <= 3) {
    comp5 = 1;
  }
  else {
    comp5 = 0;
  }
  
  //checks if their ideas about cold showers are similar
  if (Math.abs(col1 - col2) <= 3) {
    comp6 = 1;
  }
  else {
    comp6 = 0;
  }
  
  getOutput(); 
  
  //gets the output text and prints it
  setText("output",output + "\n\nCompatibility ID: " + comp1.toString() + comp2.toString() + comp3.toString() + comp4.toString() + comp5.toString() + comp6.toString());
}

function getOutput() {
  //creates local variables for the reasons
  var shouldBe;
  var reason1="";
  var reason2="";
  var reason3="";
  var reason4="";
  var reason5="";
  var reason6="";
  
  //checks if they should or shouldn't be friends
  if (comp1+comp2+comp3+comp4+comp5+comp6 <=3) {
    shouldBe = false;
  }
  else {
    shouldBe = true;
  }
  //generate text based on their specific compatibilities
  if (comp1 == 1) {
      reason1 = "You have a long history of being friends. ";
    }
  else {
    reason1 = "You haven't been friends long. ";
    }
  if (comp2 == 1) {
      reason2 = "You have a good balance of outgoingness. ";
    }
  else {
    reason2 = "You don't balance out eachother well. ";
    }
  if (comp3 == 1) {
      reason3 = "You don't have a caring imbalance. ";
    }
  else {
    reason3 = "There is a caring imbalance in your relationship. ";
    }
  if (comp4 == 1) {
      reason4 = "Your deep thoughts vibe well. ";
    }
  else {
    reason4 = "Your brains operate on different levels. ";
    }
  if (comp5 == 1) {
      reason5 = "Your schedules dance under the moonlight. ";
    }
  else {
    reason5 = "Your schedules will often conflict. ";
    }
  if (comp6 == 1) {
      reason6 = "You have similar values in life. ";
    }
  else {
    reason6 = "Your values differ. ";
    }
    
  //Create the final output, and set it based on wether or not they should be friends
  if (shouldBe == true) {
    output = "You should be friends! " + reason1 + reason2 + reason3 + reason4 + reason5 + reason6 + "Therefore, you should remain friends!";
  }
  else {
    output = "You shouldn't be friends! " + reason1 + reason2 + reason3 + reason4 + reason5 + reason6 + "Therefore, you shouldn't remain friends!";
  }
}
