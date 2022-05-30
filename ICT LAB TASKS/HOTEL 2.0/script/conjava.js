    
function validateForm() {

  var x = document.forms["contactForm"]["name"].value; 
  

  if (x == "") {
    alert("Name Must be filled"); 
    }

var y = document.forms["contactForm"]["email"].value;
  
  
  if (y == "") {
    alert("Email must be filled");
}

  var z = document.forms["contactForm"]["mobile"].value;
  
  
  if (z == "") {
    alert("Phone No must be filled ");
}
 var s = document.forms["contactForm"]["Suggestion"].value;
  
  
  if (s == "") {
    alert(" Suggestion must be filled");
     
    return false;


  }
}
