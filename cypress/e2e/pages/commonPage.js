export class CommonPage {
  visitLink(url) {
    cy.visit(url);
  }

  checkUrlAndEndpoint(url, assertion, endpoint) {
    cy.visit(url);
    cy.url(url).should(assertion, endpoint);
  }
  ////
  checkUrl(includeProperty, endpoint) {
    cy.url().should(includeProperty, endpoint);
  }
  typeOnInputByDataTest(inputDataTest, inputValue) {
    if (inputValue) {
      // si y solo sí, inputvalue existe y es real.
      cy.get(`[data-test="${inputDataTest}"]`).clear().type(inputValue);
    }
    // si no es valido o no viene nada,  no hace nada.
  }

  checkValueOnInputByDataTest(inputDataTest, inputValue) {
    cy.get(`[data-test="${inputDataTest}"]`).should("have.value", inputValue);
  }

  clickButtonByDataTest(buttonName) {
    cy.get(`[data-test="${buttonName}"]`).should("be.visible").click();
  }
}
