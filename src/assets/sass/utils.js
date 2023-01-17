const path = require("path");

const resources = ["_breakpoints.scss"];

module.exports = resources.map(file => path.resolve(__dirname, file));