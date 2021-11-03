import mongoose from "mongoose";

const dealSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    source: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Deal = mongoose.model("Deal", dealSchema);
