import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1000, height: 500 } });

test('Valid login', async function ({ page }) {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );
  //await page.setViewportSize(wid);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.locator("input[name='password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();

  await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/dashboard/);

  // logout
  //await page.getByAltText("profile picture").click()
  await page.locator('img.oxd-userdropdown-img').click();
  await page.getByText('Logout').click();
  //await page.locator().click()
});

test('Invalid login', async function ({ page }) {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('123344');
  await page.locator("//button[normalize-space()='Login']").click();

  const errMsg = await page
    .locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
    .textContent();
  expect(errMsg).toBe('Invalid credentials');
  expect(errMsg.includes('Invalid')).toBeTruthy();
});
