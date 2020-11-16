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

// checking if email is valid or not 

function isValidEmail(email){
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
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

  } else if(!isValidEmail(email.value)){
      showError(email, "Email is not valid");

  }else {
    showSuccess(email);
  }

  //if password1 is not entered
  if (password1.value === "") {
    showError(password1, "Password is required");

  } else if(password1.value.length <= 8){
      showError(password1, "Password must be more than 8 character");

  }
  else {
    showSuccess(password1);
  }

  //if password2 is not entered
  if (password2.value === "") {
    showError(password2, "Password is required again");

  } else if(password2.value != password1.value){
      showError(password2, "Password not matched");
  }
  else {
    showSuccess(password2);
  }
});

