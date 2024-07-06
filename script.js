function getFormvalue() {
    // Prevent the form from submitting (since we handle it with JavaScript)
    event.preventDefault();

    // Get the form element
    const form = document.getElementById('myForm');

    // Get the values of First Name and Last Name inputs
    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;

    // Display the values using alert
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Attach event listener to the form's submit event
const form = document.getElementById('myForm');
form.addEventListener('submit', getFormvalue);
