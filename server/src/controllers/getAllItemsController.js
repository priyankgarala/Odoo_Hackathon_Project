import Item from "../models/Item.js";

const getAllItemsController = async (req, res) => {
  try {
    const items = await Item.find()
      .populate("user", "name, email") // only include specific user fields
      .sort({ createdAt: -1 }); // latest first

    res.status(200).json({ items });
  } catch (error) {
    console.error("Get Items Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default getAllItemsController;
