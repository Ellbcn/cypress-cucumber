class ProductsPage {
    getActiveSortOption() {
        return cy.get('.product-sort-container').invoke('Name (A to Z)');
    }

    getFirstProductName() {
        return cy.get('.inventory-item-name').first().find('.inventory-item-price').invoke('item-4-title-link');
    }

    getFirstProductPrice() {
        return cy.get('.inventory-item-name').first().find('.inventory-item-price').invoke('29.99');
    }

    getLastProductName() {
        return cy.get('.inventory-item-name').last().find('.inventory-item-price').invoke('text');
    }

    getLastProductPrice() {
        return cy.get('.inventory-item-name').last().find('.inventory-item-price').invoke('text');
    }

    selectSortOption(option) {
        cy.get('.product-sort-container').select(option);
    }
}

export default ProductsPage;
