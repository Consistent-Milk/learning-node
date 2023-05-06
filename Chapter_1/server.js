console.log("hello world!");

const os = require("os");
const path = require("path");
const math = require("./math");

console.log("OS module uses");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log("");
console.log("Node dirname and filename");
console.log(__dirname);
console.log(__filename);
console.log("");

console.log("Path module uses");
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log("");

console.log("Custom math module uses");
console.log(math.add(2, 3));
console.log(math.subtract(1, 2));
console.log(math.multiply(2, 3));
console.log(math.divide(1, 0));
