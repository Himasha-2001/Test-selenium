 /tests/form.test.js

const {Builder, By, Until} =require('selenium-webdriver');
const path = require('path');

(async function test(){
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http:localhost:3000');

    const nameInput = await driver.findElement(By.name('name'));
    const emailInput = await driver.findElement(By.name('email'));
    const submitButton = await driver.findElement(By.css('button[type="submit"]'));
  }
})

//const { Builder, By, until } = require('selenium-webdriver');
// const path = require('path');

// (async function example() {
//   const driver = await new Builder().forBrowser('chrome').build();

//   try {
//     // Open the React app in the browser
//     await driver.get('http://localhost:3000'); // Assuming your React app is running locally

//     // Find the form inputs and submit button
//     const nameInput = await driver.findElement(By.name('name'));
//     const emailInput = await driver.findElement(By.name('email'));
//     const submitButton = await driver.findElement(By.css('button[type="submit"]'));

//     // Fill out the form
//     await nameInput.sendKeys('John Doe');
//     await emailInput.sendKeys('john.doe@example.com');

//     // Submit the form
//     await submitButton.click();

//     // Wait for success message to appear
//     await driver.wait(until.elementLocated(By.css('h2')), 5000); // Wait for <h2> with success message

//     // Verify the success message is shown
//     const successMessage = await driver.findElement(By.css('h2')).getText();
//     console.log(successMessage); // Should log: "Form Submitted Successfully!"

//     // Optionally, assert the success message
//     if (successMessage === 'Form Submitted Successfully!') {
//       console.log('Test Passed!');
//     } else {
//       console.log('Test Failed!');
//     }

//   } finally {
//     // Quit the driver after the test
//     await driver.quit();
//   }
// })();
