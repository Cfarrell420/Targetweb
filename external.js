function bgChange() {
	document.body.style.background = "yellow"; //allows the user to change the background colour
  
}

var poverty = ["5.6% of people live in consistent poverty, 2018", "14% of people live in risk of poverty, 2018", "€791.6m in total grants to poverty reduction programmes ,2018", "70% of homeless people are in dublin", "there are 14,486 homeless people in ireland"]
//^^ creates an array full of facts ready to be called
var randomFact= randomList(poverty);
var targetbutton = document.getElementById("targetbutton") 
targetbutton.addEventListener("click", facts()) //waits for the user to clcik the button to return the fact function
function facts() {
	document.getElementById('here').innerHTML = randomFact;  //displays the random fact
}
function randomList(list) {
	var x= Math.floor(Math.random() * list.length); // allows for a random fact to be said and is only with the facts in the list
	return list[x]; 
}
		
function validateForm() { //creates a function that will validate the form
  let x = document.forms["myForm"]["name"].value; //checks the field for an input
  if (x == "") {
    alert("Name must be filled out"); //alerts the user that theyve left the field blank
    return false;
  }
   let y = document.forms["myForm"]["email"].value;
  if (y == "") {
    alert("email must be filled out");
    return false;
  }
   let z = document.forms["myForm"]["address"].value;
  if (z == "") {
    alert("address must be filled out");
    return false;
  }
     if (myForm.check.checked == false) { //checks if youve checked the terms and conditions box//
        alert ('you haven\'t accepted the terms and conditions!');
        return false;
    } else {    
        return true;
    }
}
