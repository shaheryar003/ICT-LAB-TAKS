    
function validateForm() {

var x = document.forms["signup"]["username"].value; 
  

  if (x == "") {
    alert("Name Must be filled"); 
    }

var y = document.forms["signup"]["email"].value;
  
  
  if (y == "") {
    alert("Email must be filled");
}

var z = document.forms["signup"]["password"].value;
  
  
  if (z == "") {
    alert("Password  must be filled");
}
 var s = document.forms["signup"]["re"].value;
 
  if (s == "") {
    alert(" Re-enter Password must be filled");
     
    return false;


  }
}
