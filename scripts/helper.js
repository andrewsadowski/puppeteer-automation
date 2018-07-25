const fs = require('fs');

//Creates an array of URLs separated by line breaks
const parseUrls = () => {
  const urlArr = fs
    .readFileSync('./scripts/WC_Estimator/urls.txt')
    .toString()
    .split('\n');
  return urlArr;
};

const exportToCSV = data => {
  //create/append data to file
  fs.appendFile('./scripts/WC_Estimator/output/URL_WC.csv', data, err => {
    if (err) throw err;
    console.log('File appended to...');
  });
};

module.exports = {
  parseUrls,
  exportToCSV
};
