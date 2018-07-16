const fs = require("fs");

const parseUrls = () => {
  const urlArr = fs
    .readFileSync("./urls.txt")
    .toString()
    .split("\n");
  return urlArr;
};

module.exports = {
  parseUrls
};
