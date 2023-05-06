import app from "./app";
import * as http from "http";
import logger from "./config/logger";

const server = app.listen(app.get("port"), () => {
  logger.log(
    "info",
    `product-service is Running at http://${process.env.ADDRESS}:${
      process.env.PORT
    } in mode ${app.get("env")}`,
    app.get("port"),
    app.get("env")
  );
  logger.log("info", "Press CTRL-C to stop");
});

export default server;
