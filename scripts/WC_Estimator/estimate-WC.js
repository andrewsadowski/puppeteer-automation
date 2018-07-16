const puppeteer = require("puppeteer");
const wordCount = require("html-word-count");
const fs = require("fs");
const { parseUrls } = require("../helper.js");

async function run() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto("https://github.com");
  const html = await page.content();
  console.log(html);
  let ghWC = await wordCount(html);
  console.log(ghWC);
  // await page.screenshot({ path: 'screenshots/github.png' });
  // await page.goto('https://github.com/andrewsadowski');
  // await page.screenshot({ path: 'screenshots/github-profile.png' });

  browser.close();
}

run();

console.log(parseUrls());
