// Form valudation script:
function validateForm() {
// Checking if FirstName field isn't empty
  var x = document.forms["form"]["FirstName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
// Checking if LAstName field isn't empty
  var y = document.forms["form"]["LastName"].value;
  if (y == "") {
    alert("Last Name must be filled out");
    return false;
  }
// Checking if Message field isn't empty
  var z = document.forms["form"]["Message"].value;
  if (z == "") {
    alert("Message must be filled out");
    return false;
  }
// if validation was successful
  	else {
  		alert("Form successfully submitted");
  	}
  return true;
}
