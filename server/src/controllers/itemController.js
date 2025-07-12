import Item from "../models/Item.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

const createItemController = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      type,
      size,
      condition,
      tags,
    } = req.body;

    const userId = req.user._id;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Images are required" });
    }

    const imageUrls = await Promise.all(
      req.files.map((file) => uploadToCloudinary(file.buffer, file.originalname))
    );

    const newItem = new Item({
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags?.split(",") || [],
      images: imageUrls,
      status: "available",
      user: userId,
    });

    const savedItem = await newItem.save();

    res.status(201).json({ message: "Item created", item: savedItem });
  } catch (err) {
    console.error("Create Item Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default createItemController;
