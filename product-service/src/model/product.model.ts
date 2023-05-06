import mongoose, { Document, model, Model, Schema } from "mongoose";
const productSchema: Schema = new Schema(
  {
    name: { type: String },
    barcode: { type: Number },
    model: { type: String },
    designer: { type: String },
    inStock: { type: Number },
    desc: { type: String },
    material: { type: String },
    img: { type: String },
    price :{type:Number},
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
