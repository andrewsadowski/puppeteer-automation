const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com');
  await page.screenshot({ path: 'output/screenshots/github.png' });
  await page.goto('https://github.com/andrewsadowski');
  await page.screenshot({ path: 'output/screenshots/github-profile.png' });

  browser.close();
}

run();
