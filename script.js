//Code from stackoverflow
function pwcheck() {
  const password = document.querySelector('input[name=pwd]');
  const confirm = document.querySelector('input[name=cpwd]');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
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