//Code from stackoverflow
function pwcheck() {
  //getting input for password
  const password = document.querySelector('input[name=pwd]');
  //getting confirm pw input 
  const confirm = document.querySelector('input[name=cpwd]');
  //checking if confirm and pw are the same
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    //if passwords do not match
    confirm.setCustomValidity('Passwords do not match');
  }
}

const userArray = ["Harry", "Elizabeth", "Shana"];

//could not figure out username checking
function userCheck(){
  const username = document.querySelector('input[name=uname]');
  if (username.value == userArray.value){
    confirm.setCustomValidity("Username Taken");
  }
}

//Canvas Code
var canvas  = document.getElementById("mycanvas");

if (canvas.getContext) {   
   var ctx = canvas.getContext('2d');   
   // drawing code here   
} else {   
   
   // canvas-unsupported code here 
}  