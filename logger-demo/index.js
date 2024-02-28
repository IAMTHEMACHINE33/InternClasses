const express = require("express");
const winston = require("winston");

const { combine, timestamp, printf } = winston.format;

const app = express();

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}]  ${level}: ${message}`;
});

const infoLogger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), myFormat),
  defaultMeta: { service: "index" },
  transports: [new winston.transports.Console()],
});

for (let i = 0; i < 10; ++i) {
  if (i % 2 === 0) {
    infoLogger.info(`${i} is even number.`);
  } else {
    infoLogger.error(`${i} is odd number.`);
  }
}

app.listen(6969, () => {
  infoLogger.info("Application is litening on port : 6969");
});
