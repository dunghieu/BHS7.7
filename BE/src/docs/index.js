const basicInfo = require("./basicInfo");
const server = require("./server");
const components = require("./components");
const tags = require("./tags");
const path = require("./path");

module.exports = {
  ...basicInfo,
  ...server,
  ...components,
  ...tags,
  ...path,
};
