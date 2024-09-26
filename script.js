// Function to handle form submission
function getFormValue(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Combine first and last name
    const fullName = `${firstName} ${lastName}`;

    // Display the full name in an alert
    alert(fullName);
}

// Attach event listener to the form
document.getElementById('loginForm').addEventListener('submit', getFormValue);