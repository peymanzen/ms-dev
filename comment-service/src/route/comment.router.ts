import express from "express";
import * as commentCtrl from "../controller/comment.ctrl";

const commentRouter = express.Router();

commentRouter.post("/create", commentCtrl.createComment);
commentRouter.get("/getAll", commentCtrl.getComment);
commentRouter.get("/byProd/:id",commentCtrl.getByProductId);

export default commentRouter;
