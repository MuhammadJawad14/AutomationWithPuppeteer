const { Given, When, Then, After } = require('cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert');
const fs = require('fs');

let browser;
let page;

Given('I open the website {string}', { timeout: 15000 }, async function (url) {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto(url);
});

When('I take a screenshot named {string}', async function (filename) {
  await page.screenshot({ path: filename });
});

Then('I should see the screenshot file', function () {
  const screenshotExists = fs.existsSync('Maven.png');
  assert.ok(screenshotExists, 'Screenshot file does not exist');
});

After(async function () {
  // Delay the browser closing to ensure the screenshot has been saved
  await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the delay as needed
  if (browser) {
    await browser.close();
  }
});
