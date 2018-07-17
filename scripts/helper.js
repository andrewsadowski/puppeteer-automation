const fs = require('fs');

//Creates an array of URLs separated by line breaks
const parseUrls = () => {
  const urlArr = fs
    .readFileSync('./urls.txt')
    .toString()
    .split('\n');
  return urlArr;
};

const exportWCToCSV = (url, wordcount) => {
  //Format CSV data with tab and line break
  let concatData = url + '\t' + wordcount + '\n';

  //create/append data to file
  fs.appendFile('./output/URL_WC.csv', concatData, (err) => {
    if (err) throw err;
    console.log('File appended to...');
  });
};

module.exports = {
  parseUrls,
  exportWCToCSV
};