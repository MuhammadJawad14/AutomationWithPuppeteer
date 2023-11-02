const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false, 
      timeout: 60000,
    });

    console.log("Browser launched successfully.");

    const page = await browser.newPage();
    await page.goto('https://mvnrepository.com/');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
  } catch (error) {
    console.error("Error during browser operation:", error);
  }
})();
