// Add event listener for form submission
document.getElementById("cookieForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the cookie value from the input field
  var cookieValue = document.getElementById("cookieValue").value;

  // Create the cookie
  document.cookie = "myCookie=" + encodeURIComponent(cookieValue);

  // Display a message
  document.getElementById("cookieMessage").textContent = "Cookie created with value: " + cookieValue;
});
