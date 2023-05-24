// Function to validate the registration form
function validateRegistrationForm() {
    // Get form inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validate first name
    if (firstName === "") {
      alert("Please enter your first name.");
      return false;
    }
  
    // Validate last name
    if (lastName === "") {
      alert("Please enter your last name.");
      return false;
    }
  
    // Validate email
    if (email === "") {
      alert("Please enter your email address.");
      return false;
    } else {
      // Regular expression for email validation
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
    }
  
    // Validate password
    if (password === "") {
      alert("Please enter a password.");
      return false;
    } else {
      // Password must contain at least 8 characters including a lowercase letter, an uppercase letter, and a number
      var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!passwordPattern.test(password)) {
        alert("Please enter a password with at least 8 characters including a lowercase letter, an uppercase letter, and a number.");
        return false;
      }
    }
  
    // All validations passed
    alert("Registration form is valid!");
    return true;
  }
  