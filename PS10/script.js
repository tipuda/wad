// Function to validate the login form
function validateLoginForm() {
    // Get form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validate username
    if (!isValidUsername(username)) {
      displayErrorMessage("Invalid username. Username should contain at least one uppercase letter, one lowercase letter, one special character, one number, and have a minimum length of 8 characters.");
      return false;
    }
  
    // Validate password
    if (!isValidPassword(password)) {
      displayErrorMessage("Invalid password. Password should contain at least one uppercase letter, one special character, and have a minimum length of 8 characters.");
      return false;
    }
  
    // Form is valid, proceed with login
    alert("Login successful!");
    return true;
  }
  
  // Function to validate the username format
  function isValidUsername(username) {
    var usernameRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return usernameRegex.test(username);
  }
  
  // Function to validate the password format
  function isValidPassword(password) {
    var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Function to display an error message
  function displayErrorMessage(message) {
    var errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    var form = document.getElementById("loginForm");
    form.appendChild(errorMessage);
  }
  