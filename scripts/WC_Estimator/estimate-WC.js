const puppeteer = require('puppeteer');
const wordCount = require('html-word-count');
const fs = require('fs');
const {
  parseUrls,
  exportWCToCSV
} = require('../helper.js');

async function processWCLinks() {
  //Create URL array fomr urls.txt file
  const urls = parseUrls();
  console.log(urls);

  //Loop through URL array, launch puppeteer, grab html content,
  //Get a word count => write it to the output csv file
  for (const url of urls) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    const WC = await wordCount(html);
    browser.close();
    exportWCToCSV(url, WC);
  }
}

processWCLinks();

//Previous async function for getting wc
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