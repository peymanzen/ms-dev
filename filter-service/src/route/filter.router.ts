import express from "express";
import * as filterCtrl from "../controller/filter.ctrl";

const filterRouter = express.Router();

filterRouter.get("/filter", filterCtrl.getFilter);

export default filterRouter;
