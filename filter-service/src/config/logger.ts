import { createLogger, transports, format } from "winston";
import "winston-mongodb";

// const options: winston.LoggerOptions = {
//     transports: [
//         new winston.transports.Console({
//             level: process.env.NODE_ENV === 'production' ? 'error' : 'debug'
//         }),
//         new winston.transports.File({ filename: 'debug.log', level: 'debug' })
//     ]
// };

// const logger = winston.createLogger(options);

// if(process.env.NODE_ENV !== "production"){
//     logger.debug("Logging initialized at debag level");
// }
const { splat, combine, timestamp, label, printf, prettyPrint } = format;
const newFormat = printf(({ level, message, timestamp, metadata }) => {
  let msg = `${timestamp} [${level}] : ${message} `;
  if (metadata) {
    msg += JSON.stringify(metadata);
  }
  return msg;
});
const logger = createLogger({
  level: "debug",
  format: combine(
    format.colorize(),
    splat(),
    timestamp(),
    prettyPrint(),
    newFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "error.log",
      level: "error",
    }),
  ],
});

export default logger;
