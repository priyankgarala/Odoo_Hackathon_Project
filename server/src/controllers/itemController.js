import Item from "../models/Item.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";

// Create Item
const listItems = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, type, status } = req.query;
    const filters = {};

    if (category) filters.category = category;
    if (type) filters.type = type;
    if (status) filters.status = status;

    const items = await Item.find(filters)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate("user", "name")
      .sort({ createdAt: -1 });

    const total = await Item.countDocuments(filters);

    res.status(200).json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      items,
    });
  } catch (err) {
    console.error("List Items Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};


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

// Get Item Details
const getItemDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id)
      .populate('user', 'name email') // Populate uploader info
      .exec();

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({
      id: item._id,
      title: item.title,
      description: item.description,
      category: item.category,
      type: item.type,
      size: item.size,
      condition: item.condition,
      tags: item.tags,
      status: item.status,
      images: item.images,
      createdAt: item.createdAt,
      uploader: item.user,
      options: ["Swap Request", "Redeem via Points"],
    });
  } catch (error) {
    console.error("Get Item Details Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default {
  createItemController,
  getItemDetails,
  listItems

};
