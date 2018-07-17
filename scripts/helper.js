const fs = require('fs');

const parseUrls = () => {
  const urlArr = fs
    .readFileSync('./urls.txt')
    .toString()
    .split('\n');
  return urlArr;
};

const exportWCToCSV = (url, wordcount) => {
  let concatData = url + '\t' + wordcount;
  fs.appendFile('./output/URL_WC.csv', concatData, (err) => {
    if (err) throw err;
    console.log('File appended to...')
  });
};

module.exports = {
  parseUrls,
  exportWCToCSV
};