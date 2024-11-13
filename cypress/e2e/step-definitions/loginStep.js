import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
// Clases importadas
import { LoginPage } from "../pages/loginPage";
import { CommonPage } from "../pages/commonPage";
//Instancias de clase
let loginPage = new LoginPage();
let commonPage = new CommonPage();

Given(
  "I check that the url {string} should {string}, {string}",
  (url, assertion, endpoint) => {
    commonPage.checkUrlAndEndpoint(url, assertion, endpoint);
  }
);
//////////////

When(
  "I login with the username {string} and password {string}",
  (userName, password) => {
    loginPage.loginFlow(userName, password);
  }
);

When("I login with valid credentials", () => {
  loginPage.checkUrl("not.include", "inventory");
  loginPage.checkValueOnInputByDataTest("username", "");
  loginPage.typeOnInputByDataTest("username", "standard_user");
  loginPage.checkValueOnInputByDataTest("username", "standard_user");
  loginPage.checkValueOnInputByDataTest("password", "");
  loginPage.typeOnInputByDataTest("password", "secret_sauce");
  loginPage.checkValueOnInputByDataTest("password", "secret_sauce");
  loginPage.clickButtonByDataTest("login-button");
  loginPage.checkUrl("include", "inventory");
});
///

Then("It should NOT show error messages", () => {
  loginPage.noErrorMessages();
});

Then("It should show error message: Username is required", () => {
  loginPage.showsErrorMessagesUsernameRequired();
});
Then("It should show error message: Password is required", () => {
  loginPage.showsErrorMessagesPasswordRequired();
});
Then(
  "It should show error message: Epic sadface: Username and password do not match any user in this service",
  () => {
    loginPage.showsErrorMessageInvalidLoginMatch();
  }
);
Then("It should show error message: {string}", (message) => {
  loginPage.showsErrorMessage(message);
});

// Then("It should show error messages"), () => {};
