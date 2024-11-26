const { expect } = require('@playwright/test');
const { UserData } = require('../FixturesFile/fixturesData');
const user = UserData();

async function fillAllFields(page) {
 
  await page.locator('input[name="first-name"]').fill(user.first_name[0]);
  await page.locator('input[name="last-name"]').fill(user.last_name[0]);
  await page.locator('input[name="email"]').fill(user.email_[0]);
  await page.locator('input[name="password"]').fill(user.password_[0]);
  await page.locator('input[name="confirm-password"]').fill(user.confirm_password[0]);
  await page.check('input#gender1');
  await page.fill('input#date-of-birth', user.date_Of_birth[0]);
  await page.locator('input[name="phone-number"]').fill(user.phone_number[0]);
  await page.locator('input[name="address"]').fill(user.address_[0]);
  await page.locator('input[name="linkedin-url"]').fill(user.linkedin_url[0]);
  await page.locator('input[name="github-url"]').fill(user.github_url[0]);
  await page.locator('#root form button').click();

}
async function fillMandatoryFields(page) {
 
    await page.locator('input[name="first-name"]').fill(user.first_name[0]);
    await page.locator('input[name="last-name"]').fill(user.last_name[0]);
    await page.locator('input[name="email"]').fill(user.email_[0]);
    await page.locator('input[name="password"]').fill(user.password_[0]);
    await page.locator('input[name="confirm-password"]').fill(user.confirm_password[0]);
    await page.locator('#root form button').click();
  
  }
  
  
async function fillOptionalFields(page) {
  
    await page.check('input#gender1');
    await page.fill('input#date-of-birth', user.date_Of_birth[0]);
    await page.locator('input#phone-number').fill(user.phone_number[0]);
    await page.locator('input[name="address"]').fill(user.address_[0]);
    await page.locator('input[name="linkedin-url"]').fill(user.linkedin_url[0]);
    await page.locator('input[name="github-url"]').fill(user.github_url[0]);
   
  }

  async function fieldsLocators(page){
    const firstName = page.locator('input[name="first-name"]');
    const lastName = page.locator('input[name="last-name"]');
    const email =  page.locator('input[name="email"]');
    const password = page.locator('input[name="password"]');
    const confirmPassword = page.locator('input[name="confirm-password"]');
    const genderMale = page.locator('input#gender1');
    const genderFemale = page.locator('input#gender2');
    const genderPNTS = page.locator('#root > form > div._top-bottom_1kwjy_93 > fieldset > div:nth-child(4) > input[type=radio]');
    const dob = page.locator('input#date-of-birth');
    const phoneNumber = page.locator('input#phone-number')
    const addressField = page.locator('input[name="address"]');
    const linkedinUrl = page.locator('input[name="linkedin-url"]');
    const githubField = page.locator('input[name="github-url"]');
    const submitButton = page.locator('#root form button');
    const dobLabel = page.locator('label[for="date-of-birth"]');
    const addressLabel = page.locator('label[for="address"]');
    const firstNameError = page.locator('#root > form > div:nth-child(1) > p');
    const lastNameError = page.locator('#root > form > div:nth-child(2) > p');
    const emailError = page.locator("#root > form > div:nth-child(3) > p");
    const passwordError = page.locator("#root > form > div:nth-child(4) > p");
    const confirmPasswordError = page.locator("#root > form > div:nth-child(5) > p");
    const phoneNumberError = page.locator("#root > form > div:nth-child(8) > p");
  
  
  
    return {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      genderMale,
      genderFemale,
      genderPNTS,
      dob,
      phoneNumber,
      addressField,
      linkedinUrl,
      githubField,
      submitButton,
      dobLabel,
      addressLabel,
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
      confirmPasswordError,
      phoneNumberError
    };
  
  }

  async function verifyRegistrationSuccess(page) {
    const firstNameValue = await page.inputValue('#first-name');
      expect(firstNameValue).toBe('');
  }
  
  
  module.exports = { fillAllFields, verifyRegistrationSuccess, fieldsLocators, fillMandatoryFields, fillOptionalFields };
  
  