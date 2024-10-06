function getFormValue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the first and last name inputs
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // Combine the first and last names
    const fullName = `${firstName} ${lastName}`;

    // Display the full name using an alert
    alert(fullName);
}

// Assuming the form has an id of "nameForm"
document.getElementById("nameForm").addEventListener("submit", getFormValue);
