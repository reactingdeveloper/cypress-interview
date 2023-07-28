describe('Cypress Test', () => {
  it('Test 1', () => {
    cy.visit('https://cypress-interview.vercel.app/');
    // test 1
    cy.get('.ant-menu-submenu-title').click();
    // test 2
    cy.title().should('eq', 'Cypress Interview');
    // test 3
    cy.get('.ant-space-horizontal > :nth-child(2) > .ant-btn').click();
    // test 4
    cy.get('.ant-notification-notice-message').contains('Test cypress title');
    // test 5
    cy.get('.ant-notification-notice-close').click();
    // test 6
    cy.get(':nth-child(1) > .ant-btn').click();
    //test 7
    cy.get('#basic_username').type('Shubham');
    cy.get('#basic_password').type('Radhe');
    // cy.get('.ant-checkbox-inner').uncheck();
    cy.get('.ant-modal-footer > .ant-btn-primary > span').click();
    cy.contains('Form saved');
    // test 10
    cy.get('.ant-input-wrapper > .ant-input').type('admin');
    // cy.get('body').click();
    cy.get('.ant-input-group-addon > .ant-btn').click();
    cy.get(
      '.ant-notification-notice-info > .ant-notification-notice-content > .ant-notification-notice-with-icon > .ant-notification-notice-description'
    ).contains('admin');

    // test 11
    cy.title().then((title) => {
      const nTitle = 'Cypress Test Updated';
      cy.title(nTitle);
    });
  });
});
