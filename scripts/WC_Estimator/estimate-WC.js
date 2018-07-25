const fs = require('fs');

const puppeteer = require('puppeteer');
const wordCount = require('html-word-count');

const {
  parseUrls,
  exportToCSV
} = require('../helper.js');

/**
 * Gets word count of each URL in URL array
 */
(async () => {
  //Create URL array fomr urls.txt file
  const urls = parseUrls();

  // Create CSV header
  exportToCSV('URL' + '\t' + 'Word Count');

  //Loop through URL array, launch puppeteer, grab html content,
  //Get a word count => write it to the output csv file
  for (const url of urls) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();
    const WC = await wordCount(html);
    browser.close();

    //Format CSV data with tab and line break and append to csv file
    exportToCSV(url + '\t' + WC);
  }
})();
