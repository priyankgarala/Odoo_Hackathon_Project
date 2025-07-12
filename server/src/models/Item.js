import mongoose from"mongoose";

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  status: { type: String, default: "available" },
  images: [String], // Cloudinary URLs
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // <- reference
});

export default mongoose.model("Item", itemSchema);
