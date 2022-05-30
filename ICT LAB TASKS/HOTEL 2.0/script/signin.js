    
function validateForm() {

  var x = document.forms["signin"]["user"].value; 
  

  if (x == "") {
    alert("Username Must be filled"); 
    }

var y = document.forms["signin"]["password"].value;
  
  
  if (y == "") {
    alert("Password must be filled");

     
    return false;


  }
}
