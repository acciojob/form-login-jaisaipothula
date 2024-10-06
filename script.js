describe('Test form submission', () => {
    it('should allow a user to input their first and last name and submit the form', () => {
        cy.visit(baseUrl); // Replace with your actual base URL

        // Use the correct selector for first name input
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Doe');
        cy.get('input[type="submit"]').click();

        // Verify the alert message
        cy.on('window:alert', str => {
            expect(str).to.equal('John Doe');
        });
    });

    it('should allow a user to input their first, middle and last name and submit the form', () => {
        cy.visit(baseUrl); // Replace with your actual base URL

        // Use the correct selector for first name input
        cy.get('input[name="fname"]').type('John');
        cy.get('input[name="lname"]').type('Mark Doe');
        cy.get('input[type="submit"]').click();

        // Verify the alert message
        cy.on('window:alert', str => {
            expect(str).to.equal('John Mark Doe');
        });
    });
});
