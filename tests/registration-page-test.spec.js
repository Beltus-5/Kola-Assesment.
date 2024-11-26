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

   // ============================================Password and Confirm Password==============================================================

   test("Verify Password and Confirm Password Fields Correctly Validates when they match", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[0]);
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[0]);
    page.on("dialog", async (dialog) => {
      // dialogHandled = true;
      try {
        // Assert the alert message
        expect(dialog.message()).toBe("Submission successful"); //verification to assert Linkedinvalue was accepted and next required input needed
        await dialog.accept();
      } catch (error) {
        console.error("Error handling the dialog:", error);
        await dialog.dismiss();
      }
    });

    await locators.submitButton.click();

  });

  test("Verify Password And Confirm Password Field Correctly Rejects User Profile Creation With White Spaces Between Characters", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters invalid password
    await locators.password.fill(user.password_[1]);
    //Enters invalid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[1]);

    await locators.submitButton.click();
    expect(locators.passwordError).toContainText("This field's entry must not have space characters");
    expect(locators.confirmPasswordError).toContainText("This field's entry must not have space characters");

  });

  test("Verify Password And Confirm Password Correctly Rejects User Profile Creation when they don't match", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[2]);
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[2]);

    await locators.submitButton.click();
    expect(locators.passwordError).toContainText("The password fields must match");
    expect(locators.confirmPasswordError).toContainText("The password fields must match");
  });

  test("Verify Password And Confirm Password Correctly Rejects User Profile Creation when they are left empty", async ({
    page,
  }) => {
    const locators = await fieldsLocators(page);

    //Enter valid First name
    await locators.firstName.fill(user.first_name[0]);
    //Enter valid Last name
    await locators.lastName.fill(user.last_name[0]);
    //Enters valid Email
    await locators.email.fill(user.email_[0]);
    //Enters valid password
    await locators.password.fill(user.password_[3]);
    //Enters valid Confirm password
    await locators.confirmPassword.fill(user.confirm_password[3]);

    await locators.submitButton.click();
    expect(locators.passwordError).toContainText("Please fill in this field");
    expect(locators.confirmPasswordError).toContainText("Please fill in this field");
  });

})