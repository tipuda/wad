// Function to validate the registration form
function validateRegistrationForm() {
    // Get form inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var address = document.getElementById("address").value;
  
    // Validate First Name
    if (!isValidName(firstName)) {
      alert("First name should contain alphabets only and have a minimum length of 6 characters.");
      return false;
    }
  
    // Validate Last Name
    if (!isNotEmpty(lastName)) {
      alert("Last name cannot be empty.");
      return false;
    }
  
    // Validate Email
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate Password
    if (password.length < 6) {
      alert("Password should have a minimum length of 6 characters.");
      return false;
    }
  
    // Validate Mobile Number
    if (!isValidMobileNumber(mobileNumber)) {
      alert("Mobile number should contain exactly 10 digits.");
      return false;
    }
  
    // Validate Address
    if (!isNotEmpty(address)) {
      alert("Address cannot be empty.");
      return false;
    }
  
    // All validations passed
    alert("Registration form is valid!");
    return true;
  }
  
  // Function to validate name (alphabet characters with minimum length)
  function isValidName(name) {
    var nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name) && name.length >= 6;
  }
  
  // Function to validate email format
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to validate mobile number (exactly 10 digits)
  function isValidMobileNumber(mobileNumber) {
    var mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobileNumber);
  }
  
  // Function to check if a value is not empty
  function isNotEmpty(value) {
    return value.trim() !== "";
  }
  