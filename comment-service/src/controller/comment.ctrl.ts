import CommentModel from "../model/comment.model";
import { Request, Response, NextFunction } from "express";

export const createComment = async (req: any, res: Response) => {
  const { firstName, comment, email, productId } = req.body;
  try {
    const commentData = await new CommentModel({
      firstName,
      email,
      comment,
      productId,
    });
    commentData.save();
    return res.status(201).json({
      status: "New Comment is created !",
      message: "Dear " + firstName + "you comment created succesfully",
    });
  } catch (e) {
    return res.status(500).json({
      status: "success",
    });
  }
};

export const getComment = async (req: any, res: Response) => {
  try {
    await CommentModel.find()
      .exec()
      .then((result: any) => {
        return res.status(200).json({
          comment: result,
          status: "success",
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "success",
    });
  }
};

export const getByProductId = async (req: any, res: Response) => {
  try {
    await CommentModel.find({ productId: req.params.id })
      .exec()
      .then((result: any) => {
        return res.status(200).json({
          comments: result,
          status: "success",
        })
      })
  } catch (err) {
    return res.status(500).json({
      status: "success",
    });
  }
}