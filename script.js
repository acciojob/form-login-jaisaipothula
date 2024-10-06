function getFormValue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of First Name and Last Name
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Combine the names and display them in an alert
    alert(`${firstName} ${lastName}`);
}