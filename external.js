
function bgChange(bg) {
  document.body.style.background = bg;
}

var poverty = ["5.6% of people live in consistent poverty, 2018", "14% of people live in risk of poverty, 2018", "€791.6m in total grants to poverty reduction programmes ,2018", "70% of homeless people are in dublin", "there are 14,486 homeless people in ireland"]
var randomFact= randomList(poverty);
var targetbutton = document.getElementById("targetbutton")
targetbutton.addEventListener("click", facts())
function facts() {
	document.getElementById('here').innerHTML = randomFact;
}
function randomList(list) {
	var x= Math.floor(Math.random() * list.length);
	return list[x];
}
		
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
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
     if (myForm.check.checked == false) {
        alert ('you haven\'t accepted the terms and conditions!');
        return false;
    } else {    
        return true;
    }
}
