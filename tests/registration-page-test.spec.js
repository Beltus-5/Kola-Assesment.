const { test, expect } = require("@playwright/test");
const { fieldsLocators,fillAllFields,fillMandatoryFields,fillOptionalFields,verifyRegistrationSuccess } = require("../PageObject/RegistrationPagePOM");
const { UserData } = require("../FixturesFile/fixturesData");

test.describe("Registration Page Test", () => {
  const user = UserData(); // Creates object of UserData

  test.beforeEach(async ({ page }) => {
    // Navigates to the registration page Url from the Pom
    await page.goto("https://playwright-lab.web.app");
  });
  
  // ============================================First Name==============================================================
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
  test("Verify First Name field correctly rejects special characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[1]);
    await locators.submitButton.click();
    expect(locators.firstNameError).toContainText(
      "This field must contain only letters"
    );
  });
  test("Verify First Name field correctly rejects Alphanumeric Characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[2]);
    await locators.submitButton.click();
    expect(locators.firstNameError).toContainText(
      "This field must contain only letters"
    );
  });

  test("Verify First Name Field correctly rejects white Spaces Between Letters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[3]);
    await locators.submitButton.click();
    expect(locators.firstNameError).toContainText(
      "This field's entry must not have space characters"
    );
  });

  test("Verify First Name Field throws an error if left empty", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //verify the first name input field is enabled
    await expect(locators.firstName).toBeEnabled();

    //Enters Invalid first name
    await locators.firstName.fill(user.first_name[4]);

    await locators.submitButton.click();
    expect(locators.firstNameError).toContainText("Please fill in this field");
  });

   // ============================================Last Name==============================================================
   test("Verify Form Correctly Validates Profile Creation With Valid Alphabetic Characters Filled in Last Name Field", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page); //Create object of the fieldsLocators
    //verify the last name input field is enabled
    await expect(locators.firstName).toBeEnabled();

    //Enters Last name John in the input box
    await locators.firstName.fill(user.last_name[0]);

    await locators.submitButton.click();

    //Asserts John is displayed in the input box after filling
    expect(locators.firstName).toHaveValue(user.last_name[0]);
  });

  test("Verify Last Name field correctly rejects special characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //Enters Invalid last name
    await locators.lastName.fill(user.last_name[1]);
    await locators.submitButton.click();
    expect(locators.lastNameError).toContainText(
      "This field must contain only letters"
    );
  });
  test("Verify Last Name field correctly rejects Alphanumeric Characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //Enters Invalid last name
    await locators.lastName.fill(user.last_name[2]);
    await locators.submitButton.click();
    expect(locators.lastNameError).toContainText(
      "This field must contain only letters"
    );
  });

  test("Verify Last Name Field correctly rejects white Spaces Between Letters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enters Invalid first name
    await locators.lastName.fill(user.last_name[3]);
    await locators.submitButton.click();
    expect(locators.lastNameError).toContainText(
      "This field's entry must not have space characters"
    );
  });

  test("Verify Last Name Field throws an error if left empty", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //verify the first name input field is enabled
    await expect(locators.lastName).toBeEnabled();

    //Enters Invalid first name
    await locators.lastName.fill(user.first_name[4]);

    await locators.submitButton.click();
    expect(locators.lastNameError).toContainText("Please fill in this field");
  });

  // ============================================Email==============================================================

  test("Verify Email Field Correctly Validates valid email format", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    await locators.submitButton.click();
    //Asserts john.smith@example.com is displayed in the input box after filling
    expect(locators.email).toHaveValue(user.email_[0]);

  });

  test('Verify Email Field Correctly Rejects User Profile Creation Wth Missing "@" Symbol', async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters invalid Email
    await locators.email.fill(user.email_[1]);

    await locators.submitButton.click();
    expect(locators.emailError).toContainText("Email is not valid");
  });

  test("Verify Email Field Correctly Rejects Profile Creation With Invalid Email (Missing Domain)", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters invalid Email
    await locators.email.fill(user.email_[2]);

    await locators.submitButton.click();
    expect(locators.emailError).toContainText("Email is not valid");

  });

  test("Verify Email Field throws an error if left empty", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);
    //verify the first name input field is enabled
    await expect(locators.email).toBeEnabled();

    //Enters Invalid first name
    await locators.email.fill(user.email_[3]);

    await locators.submitButton.click();
    expect(locators.emailError).toContainText("Please fill in this field");
  });

})