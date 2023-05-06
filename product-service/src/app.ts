import express from "express";
import logger from "./config/logger";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./router/product.router";
import { ConsoleTransportOptions } from "winston/lib/winston/transports";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use("/api/product", productRouter);
app.get("/health", (req, res) =>
  res.json({ status: true, message: "Health OK" })
);

//MongoDB Connection
const DB_ADDR = process.env.DB_ADDR;
const MONGODB_URI = "mongodb://" + DB_ADDR + "/testDB";
//const MONGODB_URI = "mongodb://127.0.0.1:27017/products";
const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  //keepAlive: true,
  //poolSize: 50,
  autoIndex: false,
  retryWrites: false,
};
const handleConnectivity = () => {
  return mongoose
    .connect(MONGODB_URI, MONGO_OPTIONS)
    .then((result) => {
      logger.log(
        "info",
        `MongoDB is connected on host ${result.connection.host}:${result.connection.port} name ${result.connection.name}`
      );
    })
    .catch((err) => {
      logger.log(
        "error",
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      setTimeout(handleConnectivity, 3000);
    });
};
handleConnectivity();
export default app;
