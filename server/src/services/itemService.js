import Item from "../models/Item.js";
import uploadToCloudinary  from "../utils/uploadToCloudinary.js";

const createItem = async (data, files, userId) => {
  const { title, description, category, type, size, condition, tags } = data;

  const tagArray = tags ? tags.split(",").map(tag => tag.trim()) : [];

  const imageUploadPromises = files.map(file =>
    uploadToCloudinary(file.buffer, "items")
  );

  const imageUrls = await Promise.all(imageUploadPromises);

  const newItem = new Item({
    title,
    description,
    category,
    type,
    size,
    condition,
    tags: tagArray,
    images: imageUrls,
    user: userId,
  });

  return await newItem.save();
};

export default createItem;
