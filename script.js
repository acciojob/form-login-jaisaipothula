cy.visit(baseUrl);

cy.get('input[name="fname"]').should('exist').type('John');
cy.get('input[name="lname"]').should('exist').type('Doe');

cy.get('input[type="submit"]').should('exist').click();

cy.on('window:alert', (str) => {
  expect(str).to.equal('John Doe');
});

