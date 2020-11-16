const username = document.getElementById("username");
const form = document.getElementById("form")
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

// function Error do display via dom

function showError(input, message){
    const containerclass = input.parentElement;
    containerclass.className = 'container-inside error';
    const small = containerclass.querySelector("small");
    small.innerText = message;  
}

// Success Function to Display 

function showSuccess(input){
    const containerclass = input.parentElement;
    containerclass.className = "container-inside success";
}







// added event listener to form and checking value of username 
form.addEventListener('submit', function(e){
  e.preventDefault(); // to prevent form submit so it will not refresh on broweser

  //if username is not entered
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  //if email is not entered
  if (email.value === "") {
    showError(email, "Email is required");
  } else {
    showSuccess(email);
  }

  //if password1 is not entered
  if (password1.value === "") {
    showError(password1, "Password is required");
  } else {
    showSuccess(password1);
  }

  //if password2 is not entered
  if (password2.value === "") {
    showError(password2, "Password is required again");
  } else {
    showSuccess(password2);
  }
});
