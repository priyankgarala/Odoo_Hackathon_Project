import mongoose from "mongoose";

const redemptionSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  pointsUsed: { type: Number, required: true },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Redemption", redemptionSchema);
