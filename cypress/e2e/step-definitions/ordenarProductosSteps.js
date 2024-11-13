import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given('el usuario visita la página de inicio', () => {
    cy.visit('https://www.saucedemo.com/');
});

Given('inicia sesión con credenciales válidas', () => {
    loginPage.login('standard_user', 'secret_sauce');
});

Then('la opción activa del select es {string}', (expectedOption) => {
    productsPage.getActiveSortOption().should('Name (A to Z)');
});

Then('el primer producto de la lista se llama {string}', (expectedName) => {
    productsPage.getFirstProductName().should('item-4-title-link');
});

Then('el primer producto de la lista tiene el precio {string}', (expectedPrice) => {
    productsPage.getFirstProductPrice().should('eq', expectedPrice);
});

Then('el último producto de la lista se llama {string}', (expectedName) => {
    productsPage.getLastProductName().should('eq', expectedName);
});

Then('el último producto de la lista tiene el precio {string}', (expectedPrice) => {
    productsPage.getLastProductPrice().should('eq', expectedPrice);
});

When('selecciona la opción {string} en el select', (option) => {
    productsPage.selectSortOption(option);
});