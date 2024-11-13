Feature: Comprobar que al ordenar por precio los productos se ordenan correctamente
    Background:
        #Esto es equivalente al beforeEach
        Given I visit "https://www.saucedemo.com/"

    # Scenario: Login Check url and endpoint
    #     Given I check that the url 'https://www.saucedemo.com/' should 'not.include', 'inventory'
    #     Given I check that the url 'https://www.saucedemo.com/' should 'include', '/'

    # #
   
    Scenario: Comprobar que al ordenar por precio los productos se ordenan correctamente
        Given I check that the url "not.include" the endpoint "inventory"
            And I check that the value in the input "username" should be ""
            And I type in the input "username" the value "standard_user"
            And I check that the value in the input "password" should be ""
            And I type in the input "password" the value "secret_sauce"
            When I click on the button "login-button"
            Then I check that the url "include" the endpoint "inventory"         
            Then la opción activa del select es "Name (A to Z)"
            And el primer producto de la lista se llama "item-4-title-link"
            And el primer producto de la lista tiene el precio "29.99"
            And el último producto de la lista se llama "Test.allTheThings() T-Shirt (Red)"
            And el último producto de la lista tiene el precio "15.99"
            When selecciona la opción "Price (low to high)" en el select
            Then el primer producto de la lista se llama "Sauce Labs Onesie"
            And el primer producto de la lista tiene el precio "7.99"
            And el último producto de la lista se llama "Sauce Labs Fleece Jacket"
            And el último producto de la lista tiene el precio "49.99"
            When selecciona la opción "Price (high to low)" en el select
            Then el primer producto de la lista se llama "Sauce Labs Fleece Jacket"
            And el primer producto de la lista tiene el precio "49.99"
            And el último producto de la lista se llama "Sauce Labs Onesie"
            And el último producto de la lista tiene el precio "7.99"
