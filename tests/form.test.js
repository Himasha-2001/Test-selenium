 // /tests/form.test.js

const {Builder, By, until} =require('selenium-webdriver');
const path = require('path');

(async function test(){
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http:localhost:3000');

    const nameInput = await driver.findElement(By.name('name'));
    const emailInput = await driver.findElement(By.name('email'));
    const submitButton = await driver.findElement(By.css('button[type="submit"]'));

    await nameInput.sendKeys('John Doe');
    await emailInput.sendKeys('johndoe@getMaxListeners.com');

    await submitButton.click();

    // success message
    await driver.wait(until.elementLocated(By.css('h2')),500000);

    const successMessage = await driver.findElement(By.css('h2')).getText();
    console.log(successMessage);

    if (successMessage === 'Form Submitted Successfully!') {
            console.log('Test Passed!');
          } else {
            console.log('Test Failed!');
          }
  }  finally {
        // Quit the driver 
        await driver.quit();
      }
})();
