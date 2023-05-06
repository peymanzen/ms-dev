import mongoose, { Schema } from "mongoose";
const commnetSchema: Schema = new Schema(
  {
    firstName: { type: String },
    email: { type: String },
    comment: { type: String },
    productId: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", commnetSchema);
