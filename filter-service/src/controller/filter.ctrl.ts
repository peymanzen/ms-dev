import { Request, Response, NextFunction } from "express";
import filterModel from "../model/filter.model";

export const getFilter = async (req: any, res: Response) => {
  const query=req.query.filter;
  try {
     await filterModel.find({"comment": {$regex:query}})
     .exec()
     .then((result:any)=>{
        return res.status(200).json({
            filter: result,
            status: "success",
          })
     })
  } catch (err) {
    return res.status(500).json({
      status: "success",
    });
  }
};
