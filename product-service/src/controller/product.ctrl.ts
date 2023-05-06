import ProductModel from "../model/product.model";
import { Request, Response, NextFunction } from "express";

export const createProduct = async (req: any, res: Response) => {
  const { name, barcode, model, designer, inStock, desc, material } = req.body;
  try {
    const productObj = await ProductModel.findOne({ barcode: req.body.barcode })
      .exec()
      .then((product: any) => {
        if (product) {
          return res.status(200).json({
            product,
            status: "success",
            message: "The product Already is exist",
          });
        } else {
          const productData = new ProductModel({
            name,
            barcode,
            model,
            designer,
            inStock,
            desc,
            material,
          });
          productData.save();
          return res.status(201).json({
            status: "New product is created !",
            message: "The product barcode  :" + barcode + "is created",
          });
        }
      });
  } catch (e) {
    return res.status(500).json({
      status: "success",
    });
  }
};

export const getProduct = async (req: any, res: Response) => {
  try {
    await ProductModel.find()
      .exec()
      .then((result: any) => {
        return res.status(200).json({
          product: result,
          status: "success",
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "success",
    });
  }
};

export const getById = async (req: any, res: Response) => {
  try {
    await ProductModel.findById({ _id: req.params.id })
      .exec()
      .then((result: any) => {
        return res.status(200).json({
          product: result,
          status: "success",
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "success",
    });
  }
};
