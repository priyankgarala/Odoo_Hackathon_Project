import mongoose from "mongoose";

const swapRequestSchema = new mongoose.Schema({
  itemOffered: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  itemRequested: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("SwapRequest", swapRequestSchema);
