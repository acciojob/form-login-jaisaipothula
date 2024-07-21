document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');

  // Function to handle form submission
  function getFormValue(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get values from the form inputs
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    // Display alert with first and last name
    alert(`${firstName} ${lastName}`);
  }

  // Attach event listener to form submission
  userForm.addEventListener('submit', getFormValue);
});
