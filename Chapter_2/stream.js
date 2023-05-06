const fs = require("fs");
const path = require("path");

const pathName = path.join(__dirname, "files", "lorem.txt");

const rs = fs.createReadStream(pathName, { encoding: "utf-8" });

const pathWrite = path.join(__dirname, "files", "new-lorem.txt");

const ws = fs.createWriteStream(pathWrite);

// rs.on("data", (dataChunk) => {
//     ws.write(dataChunk);
// });

// More efficient than above
rs.pipe(ws);
