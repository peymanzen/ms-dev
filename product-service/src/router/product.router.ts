import express from "express";
import * as productCtrl from "../controller/product.ctrl";

const productRouter = express.Router();

productRouter.post("/create", productCtrl.createProduct);
productRouter.get("/getAll", productCtrl.getProduct);
productRouter.get("/byId/:id", productCtrl.getById);

export default productRouter;
