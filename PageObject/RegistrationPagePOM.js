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