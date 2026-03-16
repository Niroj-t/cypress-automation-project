describe('CURA Make Appointment Flow', function() {

   beforeEach(() => {
     cy.visit("https://katalon-demo-cura.herokuapp.com/");
   });

   // After each test, take a screenshot if the test fails
   afterEach(function () {
     if (this.currentTest.state === "failed") {
       cy.screenshot(`FAILED_${this.currentTest.title}`);
     }
   });
    it('Login, Make and Verify Appointment', function() {
        // Click Make Appointment button
        cy.get('#btn-make-appointment').should('be.visible').click();

        // Login
        cy.get('#txt-username').should('be.visible').type('John Doe');
        cy.get('#txt-password').should('be.visible').type('ThisIsNotAPassword');
        cy.get('#btn-login').should('be.visible').click();

        // Make Appointment
        cy.get('select').should('be.visible').select('Hongkong CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').click();
        cy.get('#radio_program_medicaid').click();
        cy.get('#txt_visit_date').click().type('30/03/2026');
        cy.get('#txt_comment').click({ force: true }).type('30/03/2026');
        cy.get('#btn-book-appointment').click();

        // Verify Appointment
        cy.get('h2').should('contain.text', 'Appointment Confirmation');
        cy.get('#comment').should('contain.text', '30/03/2026');
    });
});