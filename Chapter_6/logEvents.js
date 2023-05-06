const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH::mm::ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    const logDir = path.join(__dirname, "logs");
    const logFile = path.join(__dirname, "logs", logName);

    console.log(logItem);

    try {
        if (!fs.existsSync(logDir)) {
            await fsPromises.mkdir(logDir);
        }
        await fsPromises.appendFile(logFile, logItem);
    } catch (error) {
        console.log(error);
    }
};

module.exports = logEvents;
