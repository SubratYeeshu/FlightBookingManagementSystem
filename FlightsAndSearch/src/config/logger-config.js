const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, error, timestamp }) => {
  return `${timestamp} : ${level} : ${message} : ${error}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

//logger calls
// let evalerr = new EvalError("Something went wrong in repository layer");
// logger.error({
//   message: evalerr.message,
//   error: evalerr.name,
// });
logger.info({ message: "Success", error: "No error" });
module.exports = logger;
