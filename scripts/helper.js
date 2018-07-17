const fs = require('fs');

const parseUrls = () => {
  const urlArr = fs
    .readFileSync('./urls.txt')
    .toString()
    .split('\n');
  return urlArr;
};

const exportWCToCSV = (url, wordcount) => {
  fs.writeFileSync('./output/URL_WC.csv');
};

module.exports = {
  parseUrls
};
