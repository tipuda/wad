// Add event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from being submitted
  
    // Get the form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform your login logic here
    // Example: Validate the username and password
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      // Redirect to another page if needed
      // window.location.href = "dashboard.html";
    } else {
      alert("Login failed. Please try again.");
    }
  });
  