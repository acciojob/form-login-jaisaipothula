// Function to handle form submission
function getFormValue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from the input fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    // Concatenate first and last name
    const fullName = `${firstName} ${lastName}`;

    // Display the full name in an alert
    alert(fullName);
}

// Add event listener to the form for submission
document.getElementById('nameForm').addEventListener('submit', getFormValue);
