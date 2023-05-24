document.addEventListener("DOMContentLoaded", function() {
    // Enable session tracking
    var sessionCounter = sessionStorage.getItem("counter");
    if (!sessionCounter) {
        // First time visiting, set counter to 1
        sessionCounter = 1;
    } else {
        // Increment counter
        sessionCounter++;
    }
    // Store the updated counter in the session
    sessionStorage.setItem("counter", sessionCounter);
    
    // Display the counter value on the page
    var counterElement = document.getElementById("counter");
    counterElement.textContent = "Counter: " + sessionCounter;
});
