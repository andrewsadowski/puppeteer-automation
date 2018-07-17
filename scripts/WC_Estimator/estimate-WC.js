const puppeteer = require("puppeteer");
const wordCount = require("html-word-count");
const fs = require("fs");
const { parseUrls } = require("../helper.js");

// async function run() {
//   const browser = await puppeteer.launch();

//   const page = await browser.newPage();
//   await page.goto("https://github.com");
//   const html = await page.content();
//   console.log(html);
//   let ghWC = await wordCount(html);
//   console.log(ghWC);
//   // await page.screenshot({ path: 'screenshots/github.png' });
//   // await page.goto('https://github.com/andrewsadowski');
//   // await page.screenshot({ path: 'screenshots/github-profile.png' });

//   browser.close();
// }

// run();

async function processWCLinks() {
  const urls = parseUrls();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  urls.forEach(async url => {
    await page.goto(url);
    const html = await page.content();
    let WC = await wordCount(html);
    console.log(WC);
  });
  browser.close();
}

processWCLinks();
// console.log(parseUrls());
