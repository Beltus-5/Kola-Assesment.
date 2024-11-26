const { test, expect } = require("@playwright/test");
const { fieldsLocators,fillAllFields,fillMandatoryFields,fillOptionalFields,verifyRegistrationSuccess } = require("../PageObject/RegistrationPagePOM");
const { UserData } = require("../FixturesFile/fixturesData");

test.describe("Registration Page Test", () => {
  const user = UserData(); // Creates object of UserData

  test.beforeEach(async ({ page }) => {
    // Navigates to the registration page Url from the Pom
    await page.goto("https://playwright-lab.web.app");
  });
  
  // ============================================Last Name==============================================================
  test("Verify Form Correctly Validates Profile Creation With Valid Alphabetic Characters Filled in First Name Field", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page); //Create object of the fieldsLocators
    //verify the first name input field is enabled
    await expect(locators.firstName).toBeEnabled();

    //Enters First name John in the input box
    await locators.firstName.fill(user.first_name[0]);

    await locators.submitButton.click();

    //Asserts John is displayed in the input box after filling
    expect(locators.firstName).toHaveValue(user.first_name[0]);
  });

})